using BackendStockSystem.Helpers;
using BackendStockSystem.Models;
using BackendStockSystem.Services;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Runtime.CompilerServices;

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
                            var expiration = jwtToken.ValidTo;

                            Response.Cookies.Append("jwt", jwt, new CookieOptions
                            {
                                HttpOnly = true,
                                IsEssential = true,
                            });

                            return Ok(new {message = "Success" });
                        }
                    }
                }
                    return BadRequest(new {message = "Informações inválidas"});
            }
            catch (Exception error)
            {

                throw new Exception($"Houve um problema ao tentar fazer login, detalhes do erro: {error.Message}");
            }
        }
        [HttpPost("/Signout")]
        public ActionResult UserSignOut()
        {
            Response.Cookies.Delete("jwt");
            return Ok(new { message = "Success" });
        }
        [HttpGet("/User")]
        public async Task<ActionResult> User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                UserModel user = await _userService.GetUserById(userId);

                return Ok(user);
            }
            catch (Exception _)
            {

                return Unauthorized();
            }
        }
    }
}
