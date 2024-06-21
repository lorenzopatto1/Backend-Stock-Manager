using BackendStockSystem.Helpers;
using BackendStockSystem.Models;
using BackendStockSystem.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

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
        public async Task<ActionResult<IAsyncEnumerable<ProductModel>>> GetProducts(string token)
        {
            try
            {
                var validateToken = _jwtService.Verify(token);

                int userId = int.Parse(validateToken.Issuer);

                IEnumerable<ProductModel> products = await _productService.GetProducts(userId);
                return Ok(products);

            }
            catch (SecurityTokenException)
            {

                return Unauthorized("Token inválido ou expirado. Faça login novamente.");
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<IAsyncEnumerable<ProductModel>>> GetProductsById(string token, int id)
        {
            try
            {
                var validateToken = _jwtService.Verify(token);

                int userId = int.Parse(validateToken.Issuer);

                ProductModel product = await _productService.GetProductById(id);

                if (product == null)
                    return NotFound(new { message = $"Produto com id: {id} não cadastrado" });
                else
                    return Ok(product);

            }
            catch (SecurityTokenException)
            {

                return Unauthorized("Token inválido ou expirado. Faça login novamente.");
            }
        }
        [HttpGet("/Group/{group}")]
        public async Task<ActionResult<IAsyncEnumerable<ProductModel>>> GetGroup(string token, string group)
        {
            try
            {
                var validateToken = _jwtService.Verify(token);

                int userId = int.Parse(validateToken.Issuer);

                IEnumerable<ProductModel> product = await _productService.GetProductsByCategory(group);
                return Ok(product);

            }
            catch (SecurityTokenException)
            {

                return Unauthorized("Token inválido ou expirado. Faça login novamente.");
            }
        }
        [HttpGet("Prices")]
        public async Task<ActionResult<ProductPricesAndQuantityModel>> GetPurchaseAndSaleAndQuantity(string token)
        {
            try
            {
                var validateToken = _jwtService.Verify(token);

                int userId = int.Parse(validateToken.Issuer);

                IEnumerable<ProductPricesAndQuantityModel> data = await _productService.GetPurchaseAndSaleAndQuantity();
                return Ok(data);

            }
            catch (SecurityTokenException)
            {

                return Unauthorized("Token inválido ou expirado. Faça login novamente.");
            }
        }
        [HttpGet("Categorys")]
        public async Task<ActionResult<ProductPricesAndQuantityModel>> GetCategorys(string token)
        {
            try
            {
                var validateToken = _jwtService.Verify(token);

                int userId = int.Parse(validateToken.Issuer);

                IEnumerable<string> data = await _productService.GetCategory();
                return Ok(data);

            }
            catch (SecurityTokenException)
            {

                return Unauthorized("Token inválido ou expirado. Faça login novamente.");
            }
        }
        [HttpPost]
        public async Task<ActionResult<ProductModel>> CreateProduct(string token, ProductModel productModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var validateToken = _jwtService.Verify(token);
                    int userId = int.Parse(validateToken.Issuer);
                    productModel.UserId = userId;
                    await _productService.CreateProduct(productModel);
                    return Created();

                }
                else
                    return Unauthorized();

            }
            catch (SecurityTokenException)
            {

                return BadRequest(new { message = "Usuário não autenticado" });
            }
        }
        [HttpPut]
        public async Task<ActionResult<ProductModel>> EditProduct(string token, ProductModel productModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var validateToken = _jwtService.Verify(token);
                    int userId = int.Parse(validateToken.Issuer);
                    productModel.UserId = userId;
                    await _productService.UpdateProduct(productModel);
                    return Ok();

                }
                else
                    return Unauthorized();

            }
            catch (SecurityTokenException)
            {
                return BadRequest(new { message = "Usuário não autenticado" });
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(string token, int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var validateToken = _jwtService.Verify(token);
                    int userId = int.Parse(validateToken.Issuer);
                    if (userId != null)
                    {
                        await _productService.DeleteProduct(id);
                        return Ok();
                    }
                    return Unauthorized();
                }
                return BadRequest();
            }
            catch (SecurityTokenException)
            {
                return BadRequest(new { message = "Usuário não autenticado" });
            }
        }
    }
}
