using BackendStockSystem.Enums;
using System.ComponentModel.DataAnnotations;

namespace BackendStockSystem.Models
{
    public class ProductSoldModel
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Por favor, coloque o tipo do produto")]
        public ProductTypeEnum Type { get; set; }
        public int ProductId { get; set; }
        [Required(ErrorMessage = "Por favor, coloque o nome")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Por favor, coloque a quantidade")]
        public int Quantity { get; set; }
        [Required(ErrorMessage = "Por favor, coloque o preço do produto")]
        public decimal Price { get; set; }
        public decimal? WholesalePrice { get; set; }
        public int? WholesaleMinimalQuantity { get; set; }
        [Required(ErrorMessage = "Por favor, coloque informe o valor total da compra")]
        public decimal Total { get; set; }
    }
}
