/*
  Warnings:

  - You are about to drop the column `secondpayment` on the `Sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "secondpayment",
ADD COLUMN     "secondPayment" INTEGER;
