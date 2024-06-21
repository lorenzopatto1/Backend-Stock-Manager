using BackendStockSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendStockSystem.Context.Map
{
    public class ProductMap : IEntityTypeConfiguration<ProductModel>
    {
        public void Configure(EntityTypeBuilder<ProductModel> builder)
        {
            builder.HasKey(product => product.Id);
            builder.HasOne(product => product.User)
                   .WithMany(user => user.Products)
                   .HasForeignKey(product => product.UserId)
                   .IsRequired();
        }
    }
}
