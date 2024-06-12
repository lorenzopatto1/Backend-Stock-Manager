using System.ComponentModel.DataAnnotations;

namespace BackendStockSystem.Models
{
    public class ProductModel
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Por favor, insira o nome do produto")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Por favor, insira a quantidade do produto")]
        public int Quantity { get; set; }
        [Required(ErrorMessage = "Por favor, insira o preço de compra produto")]
        public decimal PurchasePrice { get; set; }
        public decimal SalePrice { get; set; }
        public decimal? WholesaleMinimalQuantity { get; set; }
        public decimal? WholesaleUnityPrice { get; set; }
        public DateOnly? ValidationDate { get; set; }
        [Required(ErrorMessage = "Por favor, insira o grupo/categoria do produto")]
        public string Group { get; set; }

        public int? UserId { get; set; }
        
        public UserModel User { get; set; }
    }
}
