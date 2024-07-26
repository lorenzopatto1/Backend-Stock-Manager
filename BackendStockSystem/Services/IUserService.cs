using BackendStockSystem.Models;

namespace BackendStockSystem.Services
{
    public interface IUserService
    {
        Task<UserModel> GetUserByEmailAddress(string emailAddress);
        Task<UserModel> GetUserByPhoneNumber(string phoneNumber);
        Task<UserModel> GetUserById(int id);
        Task UpdateStoreNameUser(int id, string storeName);
        Task UpdateUser(int id, UserModel user);
    }
}
