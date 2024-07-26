using BackendStockSystem.Helpers;
using BackendStockSystem.Models;
using BackendStockSystem.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace BackendStockSystem.Controllers
{
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly JWTService _jwtService;

        public LoginController(IUserService userService, JWTService jwtService)
        {
            _userService = userService;
            _jwtService = jwtService;
        }
        [HttpPost("/Signin")]
        public async Task<ActionResult<UserModel>> SignIn(LoginModel loginModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserModel user = await _userService.GetUserByEmailAddress(loginModel.Login);
                    if (user == null)
                    {
                        user = await _userService.GetUserByPhoneNumber(loginModel.Login);
                    }
                    if (user != null)
                    {
                        if (user.ValidPassword(loginModel.Password))
                        {
                            var jwt = _jwtService.Generate(user.Id);
                            var tokenHandler = new JwtSecurityTokenHandler();
                            var jwtToken = tokenHandler.ReadJwtToken(jwt);

                            Response.Cookies.Append("token", jwt, new CookieOptions
                            {
                                HttpOnly = true,
                                IsEssential = true,
                                Secure = false,
                                Expires = DateTime.Now.AddDays(1),
                                SameSite = SameSiteMode.Lax
                            });

                            return Ok(new { message = "Success", token = jwt });
                        }
                    }
                }
                return BadRequest(new { message = "Informações inválidas" });
            }
           catch (Exception error)
            {

                throw new Exception($"Houve um problema ao tentar fazer login, detalhes do erro: {error.Message}");
            }
        }
        [HttpPost("/Signout")]
        public ActionResult UserSignOut()
        {
            Response.Cookies.Delete("token");
            return Ok(new { message = "Success" });
        }
        [HttpGet("/User")]
        public async Task<ActionResult> GetUser(string token)
        {
            try
            {
                var validateToken = _jwtService.Verify(token);
                int userId = int.Parse(validateToken.Issuer);

                UserModel user = await _userService.GetUserById(userId);

                return Ok(user);
            }
            catch (Exception)
            {

                return Unauthorized();
            }
        }
        [HttpPut("/StoreName")]
        public async Task<ActionResult> EditUserStoreName(string token, string storeName)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var validateToken = _jwtService.Verify(token);
                    int userId = int.Parse(validateToken.Issuer);

                    await _userService.UpdateStoreNameUser(userId, storeName);
                    return Ok();

                }
                else
                    return Unauthorized();

            }
            catch (SecurityTokenException)
            {
                return BadRequest(new { message = "Usuário não autenticado" });
            }
        }
        [HttpPut("/User")]
        public async Task<ActionResult> EditUser(string token, UserModel user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var validateToken = _jwtService.Verify(token);
                    int userId = int.Parse(validateToken.Issuer);

                    await _userService.UpdateUser(userId, user);
                    return Ok();

                }
                else
                    return Unauthorized();

            }
            catch (SecurityTokenException)
            {
                return BadRequest(new { message = "Usuário não autenticado" });
            }
        }
    }
}
