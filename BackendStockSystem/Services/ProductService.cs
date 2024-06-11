using BackendStockSystem.Context;
using BackendStockSystem.Helper;
using BackendStockSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendStockSystem.Services
{
    public class ProductService : IProductService
    {
        private readonly StockDbContext _context;
        private readonly IUserSession _userSession;
        public ProductService(StockDbContext context, IUserSession userSession)
        {
            _context = context;
            _userSession = userSession;
        }
        public async Task<IEnumerable<ProductModel>> GetProducts(int id)
        {
            try
            {
                return await _context.Products.Where(product => product.UserId == id). ToListAsync();

            }
            catch (Exception error)
            {

                throw new Exception($"Houve um erro ao listar seus produtos, detalhe do erro: {error.Message}");
            };
        }

        public async Task<IEnumerable<ProductModel>> GetProductsByCategory(string group)
        {
            try
            {
                IEnumerable<ProductModel> products;
                if (!string.IsNullOrEmpty(group))
                    products = await _context.Products.Where(product => product.Group == group).ToListAsync();
                else
                {
                    UserModel user = _userSession.GetUserSession();
                    products = await GetProducts(user.Id);
                }
                return products;
                throw new NotImplementedException();

            }
            catch (Exception error)
            {

                throw new Exception($"Houve um erro ao encontrar a categoria do produto, detalhe do erro: {error.Message}");
            };
        }

        public async Task<ProductModel> GetProductById(int id)
        {
            try
            {
                return await _context.Products.FindAsync(id);

            }
            catch (Exception error)
            {

                throw new Exception($"Houve um erro ao encontrar o id do produto, detalhe do erro: {error.Message}");
            };
        }

        public async Task<IEnumerable<ProductModel>> GetProductsByName(string name)
        {
            try
            {
                return await _context.Products.Where(product => product.Name == name).ToListAsync();


            }
            catch (Exception error)
            {

                throw new Exception($"Houve um erro ao encontrar o nome do produto, detalhe do erro: {error.Message}");
            };
        }

        public async Task CreateProduct(ProductModel product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProduct(ProductModel product)
        {
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProduct(int id)
        {
            try
            {
                ProductModel productDb = await _context.Products.Where(product => product.Id == id).FirstOrDefaultAsync();
                if (id != null)
                {
                _context.Products.Remove(productDb);

                await _context.SaveChangesAsync();
                }
            }
            catch (Exception error)
            {

                throw new Exception($"Houve um erro ao tentar apagar o produto, detalhe do erro: {error.Message}");
            }
        }
   }
}
