using BackendStockSystem.Helpers;
using BackendStockSystem.Models;
using BackendStockSystem.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BackendStockSystem.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly JWTService _jwtService;
        private readonly IUserService _userService;

        public ProductsController(IProductService productService, JWTService jwtService, IUserService userService)
        {
            _productService = productService;
            _jwtService = jwtService;
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<ProductModel>>> GetProducts()
        {
            try
            {
                string jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);
                
                if (token != null)
                {
                    IEnumerable<ProductModel> products = await _productService.GetProducts(userId);
                    return Ok(products);
                } else
                return BadRequest("Faça login para acessar seu estoque!");
            }
            catch (Exception error)
            {

                throw new Exception($"Não foi possivel encontrar seus produtos, detalhes do erro: {error.Message}");
            }
        }
        [HttpPost]
        public async Task<ActionResult<ProductModel>> CreateProduct(ProductModel productModel)
        {
            try
            {
                string jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);
                if (token != null)
                {
                    productModel.UserId = userId;
                    await _productService.CreateProduct(productModel);
                    return Created();
                } else
                return BadRequest();

            }
            catch (Exception error)
            {

                throw new Exception($"Tivemos um problema ao criar seu produto, detalhes do erro: {error.Message}");
            }
        }
        [HttpPut]
        public async Task<ActionResult<ProductModel>> EditProduct(ProductModel productModel)
        {
            try
            {
                string jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);
                if (token != null)
                {
                    productModel.UserId = userId;
                    ProductModel productDb = await _productService.GetProductById(productModel.Id);

                    productDb.Name = productModel.Name;
                    productDb.Quantity = productModel.Quantity;
                    productDb.PurchasePrice = productModel.PurchasePrice;
                    productDb.SalePrice = productModel.SalePrice;
                    productDb.WholesaleMinimalQuantity = productModel.WholesaleMinimalQuantity;
                    productDb.WholesaleUnityPrice = productModel.WholesaleUnityPrice;
                    productDb.Group = productModel.Group;

                    await _productService.UpdateProduct(productDb);

                    return Created();
                } else
                return BadRequest();

            }
            catch (Exception error)
            {

                throw new Exception($"Tivemos um problema ao criar seu produto, detalhes do erro: {error.Message}");
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            try
            {
                if (id != null)
                {
                    await _productService.DeleteProduct(id);
                    return Ok();
                } else
                return BadRequest();
            }
            catch (Exception error)
            {

                throw new Exception($"Tivemos um problema ao apagar seu produto, detalhes do erro: {error.Message}");
            }
        }
    }
}
