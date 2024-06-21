using BackendStockSystem.Models;

namespace BackendStockSystem.Services
{
    public interface IProductService
    {
        Task<IEnumerable<ProductModel>> GetProducts(int userId);
        Task<ProductModel> GetProductById(int id);
        Task<IEnumerable<ProductModel>> GetProductsByName(string name);
        Task<IEnumerable<ProductModel>> GetProductsByCategory(string group);
        Task<IEnumerable<string>> GetCategory();
        Task<IEnumerable<ProductPricesAndQuantityModel>> GetPurchaseAndSaleAndQuantity();
        Task CreateProduct(ProductModel product);
        Task UpdateProduct(ProductModel product);
        Task DeleteProduct(int id);
    }
}
