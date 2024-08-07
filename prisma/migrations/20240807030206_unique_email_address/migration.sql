/*
  Warnings:

  - You are about to drop the column `email` on the `Matrixes` table. All the data in the column will be lost.
  - You are about to drop the `EstablishmentsPlan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[emailAddress]` on the table `Functionaries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailAddress]` on the table `Matrixes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailAddress` to the `Matrixes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EstablishmentsPlan" DROP CONSTRAINT "EstablishmentsPlan_establishment_Id_fkey";

-- DropIndex
DROP INDEX "Matrixes_email_key";

-- AlterTable
ALTER TABLE "Matrixes" DROP COLUMN "email",
ADD COLUMN     "emailAddress" TEXT NOT NULL;

-- DropTable
DROP TABLE "EstablishmentsPlan";

-- CreateTable
CREATE TABLE "MatrixesPlan" (
    "id" TEXT NOT NULL,
    "matrix_Id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MatrixesPlan_id_key" ON "MatrixesPlan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MatrixesPlan_matrix_Id_key" ON "MatrixesPlan"("matrix_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Functionaries_emailAddress_key" ON "Functionaries"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Matrixes_emailAddress_key" ON "Matrixes"("emailAddress");

-- AddForeignKey
ALTER TABLE "MatrixesPlan" ADD CONSTRAINT "MatrixesPlan_matrix_Id_fkey" FOREIGN KEY ("matrix_Id") REFERENCES "Establishments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
