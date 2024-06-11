using BackendStockSystem.Models;

namespace BackendStockSystem.Services
{
    public interface IUserService
    {
        Task<UserModel> GetUserByEmailAddress(string emailAddress);
        Task<UserModel> GetUserByPhoneNumber(int phoneNumber);
        Task<UserModel> GetUserById(int id);
    }
}
