/*
  Warnings:

  - You are about to drop the column `wholesaleMinimalQuantity` on the `SoldProducts` table. All the data in the column will be lost.
  - You are about to drop the column `wholesalePrice` on the `SoldProducts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Plans" AS ENUM ('Free', 'Premium');

-- DropIndex
DROP INDEX "Products_category_key";

-- AlterTable
ALTER TABLE "SoldProducts" DROP COLUMN "wholesaleMinimalQuantity",
DROP COLUMN "wholesalePrice";
