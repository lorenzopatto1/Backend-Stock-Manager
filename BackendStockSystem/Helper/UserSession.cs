using BackendStockSystem.Models;
using System.Text.Json;

namespace BackendStockSystem.Helper
{
    public class UserSession : IUserSession
    {
        private readonly IHttpContextAccessor _httpContext;

        public UserSession(IHttpContextAccessor contextAccessor)
        {
            _httpContext = contextAccessor;
        }

        public UserModel GetUserSession()
        {
            string userSession = _httpContext.HttpContext.Session.GetString("loggedInUserSession");
            if (string.IsNullOrEmpty(userSession)) return null;

            return JsonSerializer.Deserialize<UserModel>(userSession);
        }

        public void CreateUserSession(UserModel user)
        {
            string value = JsonSerializer.Serialize(user);
            _httpContext.HttpContext.Session.SetString("loggedInUserSession", value);
        }

        public void RemoveUserSession()
        {
            _httpContext.HttpContext.Session.Remove("loggedInUserSession");
        }
    }
}
