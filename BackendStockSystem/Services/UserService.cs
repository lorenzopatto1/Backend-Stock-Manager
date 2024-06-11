using BackendStockSystem.Context;
using BackendStockSystem.Models;
using Microsoft.EntityFrameworkCore;
using System.Net.Mail;

namespace BackendStockSystem.Services
{
    public class UserService : IUserService
    {
        private readonly StockDbContext _context;

        public UserService(StockDbContext context)
        {
            _context = context;
        }

        public async Task<UserModel> GetUserById(int id)
        {
            try
            {
                return await _context.Users.FirstOrDefaultAsync(user => user.Id == id);

            }
            catch (Exception error)
            {

                throw new Exception($"Falha ao encontrar usuário por Id, detalhe do erro: {error.Message}");
            }
        }

        public async Task<UserModel> GetUserByEmailAddress(string emailAddress)
        {
            try
            {
                return await _context.Users.FirstOrDefaultAsync(user => user.EmailAddress == emailAddress);

            }
            catch (Exception error)
            {

                throw new Exception($"Falha ao encontrar usuário pelo e-mail, detalhe do erro: {error.Message}");
            }
        }

        public async Task<UserModel> GetUserByPhoneNumber(int phoneNumber)
        {
            try
            {
                return await _context.Users.FirstOrDefaultAsync(user => user.PhoneNumber == phoneNumber);

            }
            catch (Exception error)
            {

                throw new Exception($"Falha ao encontrar usuário pelo número de telefone, detalhe do erro: {error.Message}");
            }
        }
    }
}
