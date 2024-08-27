-- CreateEnum
CREATE TYPE "EstablishmentEnum" AS ENUM ('Unique', 'Network');

-- CreateEnum
CREATE TYPE "ProductEnum" AS ENUM ('Unity', 'Mix');

-- CreateEnum
CREATE TYPE "InOutEnum" AS ENUM ('In', 'Out');

-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('Male', 'Female', 'Other');

-- CreateTable
CREATE TABLE "Matrixes" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Matrixes_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Establishments" (
    "Id" SERIAL NOT NULL,
    "Matrix_Id" INTEGER NOT NULL,
    "Type" "EstablishmentEnum" NOT NULL DEFAULT 'Unique',
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Establishments_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Products" (
    "Id" SERIAL NOT NULL,
    "Establishment_Id" INTEGER NOT NULL,
    "Type" "ProductEnum" NOT NULL DEFAULT 'Unity',
    "Name" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "PurchasePrice" DECIMAL(65,30) NOT NULL,
    "SalePrice" DECIMAL(65,30) NOT NULL,
    "WholesaleMinimalQuantity" DECIMAL(65,30),
    "WholesaleUnityPrice" DECIMAL(65,30),
    "ValidationDate" TIMESTAMP(3),
    "Category" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Sales" (
    "Id" SERIAL NOT NULL,
    "Establishment_Id" INTEGER NOT NULL,
    "TotalSaleValue" DECIMAL(65,30) NOT NULL,
    "TotalPurchaseValue" DECIMAL(65,30) NOT NULL,
    "FirstPayment" INTEGER NOT NULL,
    "FirstAmountPaid" DECIMAL(65,30) NOT NULL,
    "Secondpayment" INTEGER,
    "SecondAmountPaid" DECIMAL(65,30),
    "SellerName" TEXT NOT NULL,
    "SaleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "InOuts" (
    "Id" SERIAL NOT NULL,
    "Establishment_Id" INTEGER NOT NULL,
    "Type" "InOutEnum" NOT NULL DEFAULT 'In',
    "Value" DECIMAL(65,30) NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Description" TEXT NOT NULL,

    CONSTRAINT "InOuts_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "MachineFees" (
    "Id" SERIAL NOT NULL,
    "Establishment_Id" INTEGER NOT NULL,
    "CreditFee" DECIMAL(65,30) NOT NULL,
    "DebitFee" DECIMAL(65,30) NOT NULL,
    "PixFee" DECIMAL(65,30) NOT NULL
);

-- CreateTable
CREATE TABLE "Functionaries" (
    "Id" SERIAL NOT NULL,
    "Establishment_Id" INTEGER NOT NULL,
    "Type" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "EmailAddress" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Gender" "GenderEnum" NOT NULL,
    "Document" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "EstablishmentsPlan" (
    "Id" SERIAL NOT NULL,
    "Establishment_Id" INTEGER NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "SoldProducts" (
    "Id" SERIAL NOT NULL,
    "Product_Id" INTEGER NOT NULL,
    "Type" "ProductEnum" NOT NULL,
    "Name" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "PurchasePrice" DECIMAL(65,30) NOT NULL,
    "SalePrice" DECIMAL(65,30) NOT NULL,
    "WholesalePrice" DECIMAL(65,30),
    "WholesaleMinimalQuantity" INTEGER,
    "Total" DECIMAL(65,30) NOT NULL,
    "Sale_Id" INTEGER NOT NULL,

    CONSTRAINT "SoldProducts_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Matrixes_Name_key" ON "Matrixes"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "Matrixes_Email_key" ON "Matrixes"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Establishments_Matrix_Id_key" ON "Establishments"("Matrix_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_Establishment_Id_key" ON "Products"("Establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_Category_key" ON "Products"("Category");

-- CreateIndex
CREATE UNIQUE INDEX "Sales_Establishment_Id_key" ON "Sales"("Establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "InOuts_Establishment_Id_key" ON "InOuts"("Establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "MachineFees_Id_key" ON "MachineFees"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "MachineFees_Establishment_Id_key" ON "MachineFees"("Establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Functionaries_Id_key" ON "Functionaries"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Functionaries_Establishment_Id_key" ON "Functionaries"("Establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "EstablishmentsPlan_Id_key" ON "EstablishmentsPlan"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "EstablishmentsPlan_Establishment_Id_key" ON "EstablishmentsPlan"("Establishment_Id");

-- CreateIndex
CREATE UNIQUE INDEX "SoldProducts_Product_Id_key" ON "SoldProducts"("Product_Id");

-- CreateIndex
CREATE UNIQUE INDEX "SoldProducts_Sale_Id_key" ON "SoldProducts"("Sale_Id");

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
