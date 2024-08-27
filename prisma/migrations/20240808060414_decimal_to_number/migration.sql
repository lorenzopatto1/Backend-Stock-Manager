/*
  Warnings:

  - You are about to alter the column `value` on the `InOuts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `creditFee` on the `MachineFees` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `debitFee` on the `MachineFees` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `pixFee` on the `MachineFees` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `purchasePrice` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `salePrice` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `wholesaleMinimalQuantity` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `wholesaleUnityPrice` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `firstAmountPaid` on the `Sales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `secondAmountPaid` on the `Sales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `totalPurchaseValue` on the `Sales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `totalSaleValue` on the `Sales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `purchasePrice` on the `SoldProducts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `salePrice` on the `SoldProducts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `total` on the `SoldProducts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `wholesalePrice` on the `SoldProducts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "InOuts" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "MachineFees" ALTER COLUMN "creditFee" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "debitFee" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "pixFee" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "purchasePrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "salePrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "wholesaleMinimalQuantity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "wholesaleUnityPrice" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Sales" ALTER COLUMN "firstAmountPaid" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "secondAmountPaid" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalPurchaseValue" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalSaleValue" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SoldProducts" ALTER COLUMN "purchasePrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "salePrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "total" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "wholesalePrice" SET DATA TYPE DOUBLE PRECISION;
