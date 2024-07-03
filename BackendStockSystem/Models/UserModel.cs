using BackendStockSystem.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BackendStockSystem.Models
{
    public class UserModel
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Por favor, insira seu nome")]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName => $"{FirstName} {LastName}";
        [Required(ErrorMessage = "Por favor, insira o nome de sua loja")]
        public string StoreName { get; set; }
        [Required(ErrorMessage = "Por favor, insira seu e-mail")]
        [EmailAddress(ErrorMessage = "O formato do e-mail está incorreto, corrija-o e tente novamente!")]
        public string EmailAddress { get; set; }
        [Required(ErrorMessage = "Por favor, insira seu telefone")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Por favor, selecione seu gênero")]
        public GenderEnum? Gender { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public DateOnly? RegistrationDate { get; set; }

        public virtual IEnumerable<ProductModel> Products { get; set; }
        public virtual IEnumerable<RelatoryModel> Relatory { get; set; }

        public Boolean ValidPassword(string password)
        {
            return Password == password;
        }
    }
}
