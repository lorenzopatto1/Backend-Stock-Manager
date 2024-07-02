using BackendStockSystem.Models;

namespace BackendStockSystem.Services
{
    public interface IRelatoryService
    {
        public Task<IEnumerable<RelatoryModel>> GetRelatory(int userId); 
        public Task AddSellToRelatory(RelatoryModel relatory);
    }
}
