using BackendStockSystem.Helper;
using BackendStockSystem.Models;
using BackendStockSystem.Services;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace BackendStockSystem.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IUserSession _userSession;

        public LoginController(IUserService userService, IUserSession userSession)
        {
            _userService = userService;
            _userSession = userSession;
        }
        [HttpPost]
        public async Task<ActionResult<UserModel>> SignIn(LoginModel loginModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserModel user = await _userService.GetUserByEmailAddress(loginModel.EmailAddress);
                    if (_userSession.GetUserSession() != null) return BadRequest("O usuário ja está logado");
                    if (user == null)
                    {
                        user = await _userService.GetUserByPhoneNumber(loginModel.PhoneNumber);
                    }
                    if (user != null)
                    {
                        if (user.ValidPassword(loginModel.Password))
                        {
                            _userSession.CreateUserSession(user);
                            return Ok(user);
                        }
                    }
                }
                    return BadRequest();
            }
            catch (Exception error)
            {

                throw new Exception($"Houve um problema ao tentar fazer login, detalhes do erro: {error.Message}");
            }
        }
        [Route("/Signout")]
        [HttpGet]
        public ActionResult UserSignOut()
        {
            try
            {
                _userSession.RemoveUserSession();
                return Ok();
            }
            catch (Exception error)
            {
                throw new Exception($"Houve um problema, detalhes do erro: {error.Message}");
            }
        }
    }
}
