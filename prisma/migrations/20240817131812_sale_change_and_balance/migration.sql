/*
  Warnings:

  - Added the required column `balanceToPay` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `change` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" ADD COLUMN     "balanceToPay" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "change" DOUBLE PRECISION NOT NULL;
