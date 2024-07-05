﻿// <auto-generated />
using System;
using BackendStockSystem.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BackendStockSystem.Data.Migrations
{
    [DbContext(typeof(StockDbContext))]
    partial class StockDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("BackendStockSystem.Models.ProductModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Group")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("PurchasePrice")
                        .HasColumnType("numeric");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<decimal>("SalePrice")
                        .HasColumnType("numeric");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<int?>("UserId")
                        .IsRequired()
                        .HasColumnType("integer");

                    b.Property<DateTime?>("ValidationDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<decimal?>("WholesaleMinimalQuantity")
                        .HasColumnType("numeric");

                    b.Property<decimal?>("WholesaleUnityPrice")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("BackendStockSystem.Models.ProductSoldModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<int?>("RelatoryModelId")
                        .HasColumnType("integer");

                    b.Property<decimal>("Total")
                        .HasColumnType("numeric");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<int?>("WholesaleMinimalQuantity")
                        .HasColumnType("integer");

                    b.Property<decimal?>("WholesalePrice")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("RelatoryModelId");

                    b.ToTable("ProductSoldModel");
                });

            modelBuilder.Entity("BackendStockSystem.Models.RelatoryModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<decimal?>("BalanceToPay")
                        .HasColumnType("numeric");

                    b.Property<int?>("Change")
                        .HasColumnType("integer");

                    b.Property<decimal>("FirstAmountPaid")
                        .HasColumnType("numeric");

                    b.Property<string>("FirstPayment")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("SaleDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<decimal?>("SecondAmountPaid")
                        .HasColumnType("numeric");

                    b.Property<string>("SecondPayment")
                        .HasColumnType("text");

                    b.Property<string>("Seller")
                        .HasColumnType("text");

                    b.Property<decimal>("TotalCost")
                        .HasColumnType("numeric");

                    b.Property<decimal>("TotalValue")
                        .HasColumnType("numeric");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Relatory");
                });

            modelBuilder.Entity("BackendStockSystem.Models.UserModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Gender")
                        .HasColumnType("integer");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateOnly?>("RegistrationDate")
                        .HasColumnType("date");

                    b.Property<string>("StoreName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BackendStockSystem.Models.ProductModel", b =>
                {
                    b.HasOne("BackendStockSystem.Models.UserModel", "User")
                        .WithMany("Products")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("BackendStockSystem.Models.ProductSoldModel", b =>
                {
                    b.HasOne("BackendStockSystem.Models.RelatoryModel", null)
                        .WithMany("Products")
                        .HasForeignKey("RelatoryModelId");
                });

            modelBuilder.Entity("BackendStockSystem.Models.RelatoryModel", b =>
                {
                    b.HasOne("BackendStockSystem.Models.UserModel", "User")
                        .WithMany("Relatory")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("BackendStockSystem.Models.RelatoryModel", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("BackendStockSystem.Models.UserModel", b =>
                {
                    b.Navigation("Products");

                    b.Navigation("Relatory");
                });
#pragma warning restore 612, 618
        }
    }
}
