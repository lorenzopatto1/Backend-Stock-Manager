namespace BackendStockSystem.Models
{
    public class ProductPricesAndQuantityModel
    {
        public decimal PurchasePrice { get; set; }
        public decimal SalePrice { get; set; }
        public int? Quantity { get; set; }
    }
}
