using System.ComponentModel.DataAnnotations;

namespace BackendStockSystem.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Por favor, insira seu login")]
        public string Login { get; set; }
        [Required(ErrorMessage = "Por favor, insira seu telefone")]
        public string Password { get; set; }
    }
}
