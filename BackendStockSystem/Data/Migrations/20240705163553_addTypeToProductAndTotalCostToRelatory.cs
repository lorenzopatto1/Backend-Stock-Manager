using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendStockSystem.Data.Migrations
{
    /// <inheritdoc />
    public partial class addTypeToProductAndTotalCostToRelatory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "TotalCost",
                table: "Relatory",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "ProductSoldModel",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalCost",
                table: "Relatory");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "ProductSoldModel");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Products");
        }
    }
}
