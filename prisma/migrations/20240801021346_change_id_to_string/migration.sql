/*
  Warnings:

  - The primary key for the `Establishments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `InOuts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Matrixes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SoldProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.

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

-- AlterTable
ALTER TABLE "Establishments" DROP CONSTRAINT "Establishments_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Matrix_Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Establishments_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Establishments_Id_seq";

-- AlterTable
ALTER TABLE "EstablishmentsPlan" ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Establishment_Id" SET DATA TYPE TEXT;
DROP SEQUENCE "EstablishmentsPlan_Id_seq";

-- AlterTable
ALTER TABLE "Functionaries" ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Establishment_Id" SET DATA TYPE TEXT;
DROP SEQUENCE "Functionaries_Id_seq";

-- AlterTable
ALTER TABLE "InOuts" DROP CONSTRAINT "InOuts_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Establishment_Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "InOuts_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "InOuts_Id_seq";

-- AlterTable
ALTER TABLE "MachineFees" ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Establishment_Id" SET DATA TYPE TEXT;
DROP SEQUENCE "MachineFees_Id_seq";

-- AlterTable
ALTER TABLE "Matrixes" DROP CONSTRAINT "Matrixes_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Matrixes_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Matrixes_Id_seq";

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Establishment_Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Products_Id_seq";

-- AlterTable
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Establishment_Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Sales_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "Sales_Id_seq";

-- AlterTable
ALTER TABLE "SoldProducts" DROP CONSTRAINT "SoldProducts_pkey",
ALTER COLUMN "Id" DROP DEFAULT,
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "Product_Id" SET DATA TYPE TEXT,
ALTER COLUMN "Sale_Id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SoldProducts_pkey" PRIMARY KEY ("Id");
DROP SEQUENCE "SoldProducts_Id_seq";

-- AddForeignKey
ALTER TABLE "Establishments" ADD CONSTRAINT "Establishments_Matrix_Id_fkey" FOREIGN KEY ("Matrix_Id") REFERENCES "Matrixes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_Establishment_Id_fkey" FOREIGN KEY ("Establishment_Id") REFERENCES "Establishments"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_Establishment_Id_fkey" FOREIGN KEY ("Establishment_Id") REFERENCES "Establishments"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InOuts" ADD CONSTRAINT "InOuts_Establishment_Id_fkey" FOREIGN KEY ("Establishment_Id") REFERENCES "Establishments"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineFees" ADD CONSTRAINT "MachineFees_Establishment_Id_fkey" FOREIGN KEY ("Establishment_Id") REFERENCES "Establishments"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Functionaries" ADD CONSTRAINT "Functionaries_Establishment_Id_fkey" FOREIGN KEY ("Establishment_Id") REFERENCES "Establishments"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstablishmentsPlan" ADD CONSTRAINT "EstablishmentsPlan_Establishment_Id_fkey" FOREIGN KEY ("Establishment_Id") REFERENCES "Establishments"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldProducts" ADD CONSTRAINT "SoldProducts_Sale_Id_fkey" FOREIGN KEY ("Sale_Id") REFERENCES "Sales"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
