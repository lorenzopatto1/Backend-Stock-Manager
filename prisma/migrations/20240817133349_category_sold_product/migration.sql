/*
  Warnings:

  - Added the required column `category` to the `SoldProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SoldProducts" ADD COLUMN     "category" TEXT NOT NULL;
