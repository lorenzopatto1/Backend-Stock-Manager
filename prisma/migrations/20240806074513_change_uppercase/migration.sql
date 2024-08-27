/*
  Warnings:

  - You are about to drop the column `creditfee` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `debitfee` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `establishment_id` on the `MachineFees` table. All the data in the column will be lost.
  - You are about to drop the column `pixfee` on the `MachineFees` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[establishment_Id]` on the table `MachineFees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `establishment_Id` to the `MachineFees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MachineFees" DROP CONSTRAINT "MachineFees_establishment_id_fkey";

-- DropIndex
DROP INDEX "MachineFees_establishment_id_key";

-- AlterTable
ALTER TABLE "MachineFees" DROP COLUMN "creditfee",
DROP COLUMN "debitfee",
DROP COLUMN "establishment_id",
DROP COLUMN "pixfee",
ADD COLUMN     "creditFee" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "debitFee" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "establishment_Id" TEXT NOT NULL,
ADD COLUMN     "pixFee" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "MachineFees_establishment_Id_key" ON "MachineFees"("establishment_Id");

-- AddForeignKey
ALTER TABLE "MachineFees" ADD CONSTRAINT "MachineFees_establishment_Id_fkey" FOREIGN KEY ("establishment_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
