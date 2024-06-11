using System.ComponentModel.DataAnnotations;

namespace BackendStockSystem.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Por favor, insira seu e-mail")]
        [EmailAddress(ErrorMessage = "O formato do e-mail está incorreto, corrija-o e tente novamente!")]
        public string EmailAddress { get; set; }
        [Required(ErrorMessage = "Por favor, insira seu telefone")]
        public int PhoneNumber { get; set; }
        [Required(ErrorMessage = "Por favor, insira sua senha")]
        public string Password { get; set; }
    }
}
