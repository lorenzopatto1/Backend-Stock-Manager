using BackendStockSystem.Context;
using BackendStockSystem.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace BackendStockSystem.Services
{
    public class RelatoryService : IRelatoryService
    {
        private readonly StockDbContext _context;
        public RelatoryService(StockDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<RelatoryModel>> GetRelatory(int userId)
        {
            try
            {
                if (userId != null)
                {
                    var relatory = await _context.Relatory.Where(relatory => relatory.UserId == userId).Include(relatory => relatory.Products).ToListAsync();
                    if (relatory != null)
                    {
                        return relatory;
                    }
                    throw new Exception("Não existe relatórios");
                }
                throw new Exception("Usuário inexistente");
            }
            catch (Exception error)
            {
                throw new Exception($"Houve um erro ao procurar seus relatórios, detalhes do erro: {error.Message}");
            }
        }

        public async Task AddSellToRelatory(RelatoryModel relatory)
        {
            try
            {
                foreach (var item in relatory.Products)
                {
                    var product = _context.Products.FirstOrDefault(productDb => productDb.Id == item.ProductId);
                    if (product != null)
                    {
                        product.Quantity -= item.Quantity;
                    }
                }
                _context.Relatory.Add(relatory);
                await _context.SaveChangesAsync();
            }
            catch (Exception error)
            {

                throw new Exception($"Houve um erro ao criar um novo relatório, detalhes do erro: {error.Message}");
            }
        }
    }
}
