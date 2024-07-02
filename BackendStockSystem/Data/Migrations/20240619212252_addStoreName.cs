using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendStockSystem.Data.Migrations
{
    /// <inheritdoc />
    public partial class addStoreName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "StoreName",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ValidationDate",
                table: "Products",
                type: "timestamp with time zone",
                nullable: true,
                oldClrType: typeof(DateOnly),
                oldType: "date",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StoreName",
                table: "Users");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "ValidationDate",
                table: "Products",
                type: "date",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldNullable: true);
        }
    }
}
