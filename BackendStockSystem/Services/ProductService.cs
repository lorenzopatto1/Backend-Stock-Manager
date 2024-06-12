using BackendStockSystem.Context;
using BackendStockSystem.Helpers;
using BackendStockSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendStockSystem.Services
{
    public class ProductService : IProductService
    {
        private readonly StockDbContext _context;
        private readonly JWTService _jwtService;

        public ProductService(StockDbContext context, JWTService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
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
                if (!string.IsNullOrEmpty(group))
                   return await _context.Products.Where(product => product.Group == group).ToListAsync();

                throw new Exception("Grupo não encontrado");
                
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
