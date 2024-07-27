using System.ComponentModel.DataAnnotations;

namespace BackendStockSystem.Models
{
    public class RelatoryModel
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Esta faltando o total do custo")]
        public decimal TotalCost { get; set; }
        [Required(ErrorMessage = "Está faltando o Valor total")]
        public decimal TotalValue { get; set; }
        [Required(ErrorMessage = "Está faltando a primeira forma de pagamento")]
        public string FirstPayment { get; set; }
        [Required(ErrorMessage = "Está faltando o valor pago")]
        public decimal FirstAmountPaid { get; set; }
        public decimal? Change { get; set; }
        public decimal? BalanceToPay { get; set; }
        public string SecondPayment { get; set; }
        public decimal? SecondAmountPaid { get; set; }
        public string Seller { get; set; }
        public DateTime? SaleDate { get; set; }
        public int? UserId { get; set; }
        [Required(ErrorMessage = "Não tem produtos vendidos")]
        public IEnumerable<ProductSoldModel> Products { get; set; }

        public UserModel User { get; set; }
    }
}
