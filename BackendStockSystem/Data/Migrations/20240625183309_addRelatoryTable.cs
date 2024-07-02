using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BackendStockSystem.Data.Migrations
{
    /// <inheritdoc />
    public partial class addRelatoryTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Relatory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TotalValue = table.Column<int>(type: "integer", nullable: false),
                    FirstPayment = table.Column<int>(type: "integer", nullable: false),
                    FirstAmountPaid = table.Column<int>(type: "integer", nullable: false),
                    Change = table.Column<int>(type: "integer", nullable: true),
                    BalanceToPay = table.Column<int>(type: "integer", nullable: true),
                    SecondPayment = table.Column<int>(type: "integer", nullable: true),
                    SecondAmountPaid = table.Column<int>(type: "integer", nullable: true),
                    Seller = table.Column<int>(type: "integer", nullable: false),
                    SaleDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relatory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Relatory_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ProductSoldModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    WholesalePrice = table.Column<decimal>(type: "numeric", nullable: true),
                    WholesaleMinimalQuantity = table.Column<int>(type: "integer", nullable: true),
                    Total = table.Column<decimal>(type: "numeric", nullable: false),
                    RelatoryModelId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductSoldModel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductSoldModel_Relatory_RelatoryModelId",
                        column: x => x.RelatoryModelId,
                        principalTable: "Relatory",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductSoldModel_RelatoryModelId",
                table: "ProductSoldModel",
                column: "RelatoryModelId");

            migrationBuilder.CreateIndex(
                name: "IX_Relatory_UserId",
                table: "Relatory",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductSoldModel");

            migrationBuilder.DropTable(
                name: "Relatory");
        }
    }
}
