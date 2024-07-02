using Microsoft.EntityFrameworkCore;
using BackendStockSystem.Models;
using BackendStockSystem.Context.Map;

namespace BackendStockSystem.Context
{
    public class StockDbContext : DbContext
    {
        public StockDbContext()
        { }
        public StockDbContext(DbContextOptions<StockDbContext> options) : base(options)
        {
        }

        public DbSet<ProductModel> Products { get; set; }
        public DbSet<UserModel> Users { get; set; }
        public DbSet<RelatoryModel> Relatory { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
