using BackendStockSystem.Models;

namespace BackendStockSystem.Helper
{
    public interface IUserSession
    {
        void CreateUserSession(UserModel user);
        void RemoveUserSession();
        UserModel GetUserSession();
    }
}
