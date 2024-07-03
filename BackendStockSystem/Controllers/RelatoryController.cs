using BackendStockSystem.Helpers;
using BackendStockSystem.Models;
using BackendStockSystem.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendStockSystem.Controllers
{

    [Route("/[controller]")]
    [ApiController]
    public class RelatoryController : ControllerBase
    {
        private readonly IRelatoryService _relatoryService;
        private readonly JWTService _jwtService;
        private readonly IUserService _userService;

        public RelatoryController(IRelatoryService relatoryService, JWTService jwtService, IUserService userService)
        {
            _relatoryService = relatoryService;
            _jwtService = jwtService;
            _userService = userService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RelatoryModel>>> GetRelatorys(string token)
        {
            var validateToken = _jwtService.Verify(token);

            int userId = int.Parse(validateToken.Issuer);

            if (userId != null)
            {
                var relatorys = await _relatoryService.GetRelatory(userId);
                return Ok(relatorys);
            }
            return BadRequest("Usuário não encontrado");
        }
        [HttpPost]
        public async Task<ActionResult> PostRelatory(string token, RelatoryModel relatory)
        {
            if (ModelState.IsValid)
            {
                var validateToken = _jwtService.Verify(token);

                int userId = int.Parse(validateToken.Issuer);

                if (userId != null)
                {
                    relatory.UserId = userId;
                    relatory.SaleDate = DateTime.UtcNow;
                    await _relatoryService.AddSellToRelatory(relatory);
                    return Created();
                }
                return BadRequest();
            }
            return BadRequest("Os dados passados não estão corretos");
        }
    }
}
