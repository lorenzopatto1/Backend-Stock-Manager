/*
  Warnings:

  - The primary key for the `Establishments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Created_At` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Matrix_Id` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `PhoneNumber` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Establishments` table. All the data in the column will be lost.
  - You are about to drop the column `Active` on the `EstablishmentsPlan` table. All the data in the column will be lost.
  - You are about to drop the column `Establishment_Id` on the `EstablishmentsPlan` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `EstablishmentsPlan` table. All the data in the column will be lost.
  - You are about to drop the column `StartDate` on the `EstablishmentsPlan` table. All the data in the column will be lost.
  - You are about to drop the column `Document` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `EmailAddress` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `Establishment_Id` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `PhoneNumber` on the `Functionaries` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Functionaries` table. All the data in the column will be lost.
  - The primary key for the `InOuts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Date` on the `InOuts` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `InOuts` table. All the data in the column will be lost.
  - You are about to drop the column `Establishment_Id` on the `InOuts` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `InOuts` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `InOuts` table. All the data in the column will be lost.
  - You are about to drop the column `Value` on the `InOuts` table. All the data in the column will be lost.
  - You are about to drop the column `CreditFee` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `DebitFee` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `Establishment_Id` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `PixFee` on the `MachineFees` table. All the data in the column will be lost.
  - The primary key for the `Matrixes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Created_At` on the `Matrixes` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Matrixes` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Matrixes` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Matrixes` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Matrixes` table. All the data in the column will be lost.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Category` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Establishment_Id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `PurchasePrice` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `SalePrice` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `ValidationDate` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `WholesaleMinimalQuantity` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `WholesaleUnityPrice` on the `Products` table. All the data in the column will be lost.
  - The primary key for the `Sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Establishment_Id` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `FirstAmountPaid` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `FirstPayment` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `SaleDate` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `SecondAmountPaid` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `Secondpayment` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `SellerName` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `TotalPurchaseValue` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `TotalSaleValue` on the `Sales` table. All the data in the column will be lost.
  - The primary key for the `SoldProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `Product_Id` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `PurchasePrice` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `SalePrice` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `Sale_Id` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `Total` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `WholesaleMinimalQuantity` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `WholesalePrice` on the `SoldProducts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[matrix_Id]` on the table `Establishments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `EstablishmentsPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[establishment_Id]` on the table `EstablishmentsPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Functionaries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[establishment_Id]` on the table `Functionaries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[establishment_Id]` on the table `InOuts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MachineFees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[establishment_id]` on the table `MachineFees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Matrixes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Matrixes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[establishment_Id]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[establishment_Id]` on the table `Sales` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sale_Id]` on the table `SoldProducts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_Id]` on the table `SoldProducts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Establishments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Establishments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matrix_Id` to the `Establishments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Establishments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Establishments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Establishments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `EstablishmentsPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `establishment_Id` to the `EstablishmentsPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `EstablishmentsPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailAddress` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `establishment_Id` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Functionaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `InOuts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `establishment_Id` to the `InOuts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `InOuts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `InOuts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creditfee` to the `MachineFees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debitfee` to the `MachineFees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `establishment_id` to the `MachineFees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `MachineFees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pixfee` to the `MachineFees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Matrixes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Matrixes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Matrixes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Matrixes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `establishment_Id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePrice` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salePrice` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `establishment_Id` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstAmountPaid` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstPayment` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerName` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPurchaseValue` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalSaleValue` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_Id` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePrice` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salePrice` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sale_Id` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Establishments" DROP CONSTRAINT "Establishments_Matrix_Id_fkey";

-- DropForeignKey
ALTER TABLE "EstablishmentsPlan" DROP CONSTRAINT "EstablishmentsPlan_Establishment_Id_fkey";

-- DropForeignKey
ALTER TABLE "Functionaries" DROP CONSTRAINT "Functionaries_Establishment_Id_fkey";

-- DropForeignKey
ALTER TABLE "InOuts" DROP CONSTRAINT "InOuts_Establishment_Id_fkey";

-- DropForeignKey
ALTER TABLE "MachineFees" DROP CONSTRAINT "MachineFees_Establishment_Id_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_Establishment_Id_fkey";

-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_Establishment_Id_fkey";

-- DropForeignKey
ALTER TABLE "SoldProducts" DROP CONSTRAINT "SoldProducts_Sale_Id_fkey";

-- DropIndex
DROP INDEX "Establishments_Matrix_Id_key";

-- DropIndex
DROP INDEX "EstablishmentsPlan_Establishment_Id_key";

-- DropIndex
DROP INDEX "EstablishmentsPlan_Id_key";

-- DropIndex
DROP INDEX "Functionaries_Establishment_Id_key";

-- DropIndex
DROP INDEX "Functionaries_Id_key";

-- DropIndex
DROP INDEX "InOuts_Establishment_Id_key";

-- DropIndex
DROP INDEX "MachineFees_Establishment_Id_key";

-- DropIndex
DROP INDEX "MachineFees_Id_key";

-- DropIndex
DROP INDEX "Matrixes_Email_key";

-- DropIndex
DROP INDEX "Matrixes_Name_key";

-- DropIndex
DROP INDEX "Products_Category_key";

-- DropIndex
DROP INDEX "Products_Establishment_Id_key";

-- DropIndex
DROP INDEX "Sales_Establishment_Id_key";

-- DropIndex
DROP INDEX "SoldProducts_Product_Id_key";

-- DropIndex
DROP INDEX "SoldProducts_Sale_Id_key";

-- AlterTable
ALTER TABLE "Establishments" DROP CONSTRAINT "Establishments_pkey",
DROP COLUMN "Created_At",
DROP COLUMN "Email",
DROP COLUMN "Id",
DROP COLUMN "Matrix_Id",
DROP COLUMN "Name",
DROP COLUMN "Password",
DROP COLUMN "PhoneNumber",
DROP COLUMN "Type",
ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "matrix_Id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "type" "EstablishmentEnum" NOT NULL DEFAULT 'Unique',
ADD CONSTRAINT "Establishments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "EstablishmentsPlan" DROP COLUMN "Active",
DROP COLUMN "Establishment_Id",
DROP COLUMN "Id",
DROP COLUMN "StartDate",
ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "establishment_Id" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Functionaries" DROP COLUMN "Document",
DROP COLUMN "EmailAddress",
DROP COLUMN "Establishment_Id",
DROP COLUMN "Gender",
DROP COLUMN "Id",
DROP COLUMN "Name",
DROP COLUMN "Password",
DROP COLUMN "PhoneNumber",
DROP COLUMN "Type",
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "emailAddress" TEXT NOT NULL,
ADD COLUMN     "establishment_Id" TEXT NOT NULL,
ADD COLUMN     "gender" "GenderEnum" NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InOuts" DROP CONSTRAINT "InOuts_pkey",
DROP COLUMN "Date",
DROP COLUMN "Description",
DROP COLUMN "Establishment_Id",
DROP COLUMN "Id",
DROP COLUMN "Type",
DROP COLUMN "Value",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "establishment_Id" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "type" "InOutEnum" NOT NULL DEFAULT 'In',
ADD COLUMN     "value" DECIMAL(65,30) NOT NULL,
ADD CONSTRAINT "InOuts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MachineFees" DROP COLUMN "CreditFee",
DROP COLUMN "DebitFee",
DROP COLUMN "Establishment_Id",
DROP COLUMN "Id",
DROP COLUMN "PixFee",
ADD COLUMN     "creditfee" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "debitfee" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "establishment_id" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "pixfee" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Matrixes" DROP CONSTRAINT "Matrixes_pkey",
DROP COLUMN "Created_At",
DROP COLUMN "Email",
DROP COLUMN "Id",
DROP COLUMN "Name",
DROP COLUMN "Password",
ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD CONSTRAINT "Matrixes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "Category",
DROP COLUMN "Establishment_Id",
DROP COLUMN "Id",
DROP COLUMN "Name",
DROP COLUMN "PurchasePrice",
DROP COLUMN "Quantity",
DROP COLUMN "SalePrice",
DROP COLUMN "Type",
DROP COLUMN "ValidationDate",
DROP COLUMN "WholesaleMinimalQuantity",
DROP COLUMN "WholesaleUnityPrice",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "establishment_Id" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "purchasePrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "salePrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "type" "ProductEnum" NOT NULL DEFAULT 'Unity',
ADD COLUMN     "validationDate" TIMESTAMP(3),
ADD COLUMN     "wholesaleMinimalQuantity" DECIMAL(65,30),
ADD COLUMN     "wholesaleUnityPrice" DECIMAL(65,30),
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_pkey",
DROP COLUMN "Establishment_Id",
DROP COLUMN "FirstAmountPaid",
DROP COLUMN "FirstPayment",
DROP COLUMN "Id",
DROP COLUMN "SaleDate",
DROP COLUMN "SecondAmountPaid",
DROP COLUMN "Secondpayment",
DROP COLUMN "SellerName",
DROP COLUMN "TotalPurchaseValue",
DROP COLUMN "TotalSaleValue",
ADD COLUMN     "establishment_Id" TEXT NOT NULL,
ADD COLUMN     "firstAmountPaid" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "firstPayment" INTEGER NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "saleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "secondAmountPaid" DECIMAL(65,30),
ADD COLUMN     "secondpayment" INTEGER,
ADD COLUMN     "sellerName" TEXT NOT NULL,
ADD COLUMN     "totalPurchaseValue" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "totalSaleValue" DECIMAL(65,30) NOT NULL,
ADD CONSTRAINT "Sales_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SoldProducts" DROP CONSTRAINT "SoldProducts_pkey",
DROP COLUMN "Id",
DROP COLUMN "Name",
DROP COLUMN "Product_Id",
DROP COLUMN "PurchasePrice",
DROP COLUMN "Quantity",
DROP COLUMN "SalePrice",
DROP COLUMN "Sale_Id",
DROP COLUMN "Total",
DROP COLUMN "Type",
DROP COLUMN "WholesaleMinimalQuantity",
DROP COLUMN "WholesalePrice",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "product_Id" TEXT NOT NULL,
ADD COLUMN     "purchasePrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "salePrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "sale_Id" TEXT NOT NULL,
ADD COLUMN     "total" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "type" "ProductEnum" NOT NULL,
ADD COLUMN     "wholesaleMinimalQuantity" INTEGER,
ADD COLUMN     "wholesalePrice" DECIMAL(65,30),
ADD CONSTRAINT "SoldProducts_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Establishments_matrix_Id_key" ON "Establishments"("matrix_Id");

-- CreateIndex
CREATE UNIQUE INDEX "EstablishmentsPlan_id_key" ON "EstablishmentsPlan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EstablishmentsPlan_establishment_Id_key" ON "EstablishmentsPlan"("establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Functionaries_id_key" ON "Functionaries"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Functionaries_establishment_Id_key" ON "Functionaries"("establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "InOuts_establishment_Id_key" ON "InOuts"("establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "MachineFees_id_key" ON "MachineFees"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MachineFees_establishment_id_key" ON "MachineFees"("establishment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Matrixes_name_key" ON "Matrixes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Matrixes_email_key" ON "Matrixes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Products_establishment_Id_key" ON "Products"("establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_category_key" ON "Products"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Sales_establishment_Id_key" ON "Sales"("establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "SoldProducts_sale_Id_key" ON "SoldProducts"("sale_Id");

-- CreateIndex
CREATE UNIQUE INDEX "SoldProducts_product_Id_key" ON "SoldProducts"("product_Id");

-- AddForeignKey
ALTER TABLE "Establishments" ADD CONSTRAINT "Establishments_matrix_Id_fkey" FOREIGN KEY ("matrix_Id") REFERENCES "Matrixes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_establishment_Id_fkey" FOREIGN KEY ("establishment_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_establishment_Id_fkey" FOREIGN KEY ("establishment_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InOuts" ADD CONSTRAINT "InOuts_establishment_Id_fkey" FOREIGN KEY ("establishment_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineFees" ADD CONSTRAINT "MachineFees_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Functionaries" ADD CONSTRAINT "Functionaries_establishment_Id_fkey" FOREIGN KEY ("establishment_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstablishmentsPlan" ADD CONSTRAINT "EstablishmentsPlan_establishment_Id_fkey" FOREIGN KEY ("establishment_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldProducts" ADD CONSTRAINT "SoldProducts_sale_Id_fkey" FOREIGN KEY ("sale_Id") REFERENCES "Sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
