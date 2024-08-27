/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Functionaries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Matrixes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNumber` to the `Matrixes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Matrixes" ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Functionaries_phoneNumber_key" ON "Functionaries"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Matrixes_phoneNumber_key" ON "Matrixes"("phoneNumber");
