using BackendStockSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendStockSystem.Context.Map
{
    public class RelatoryMap : IEntityTypeConfiguration<RelatoryModel>
    {
        public void Configure(EntityTypeBuilder<RelatoryModel> builder)
        {
            builder.HasKey(relatory => relatory.Id);
            builder.HasOne(relatory => relatory.User)
                   .WithMany(user => user.Relatory)
                   .HasForeignKey(relatory => relatory.UserId)
                   .IsRequired();
        }
    }
}
