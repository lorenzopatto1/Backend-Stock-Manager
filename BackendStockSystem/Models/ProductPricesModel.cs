using BackendStockSystem.Enums;

namespace BackendStockSystem.Models
{
    public class ProductPricesAndQuantityModel
    {
        public ProductTypeEnum Type { get; set; }
        public decimal PurchasePrice { get; set; }
        public decimal SalePrice { get; set; }
        public int? Quantity { get; set; }
    }
}
