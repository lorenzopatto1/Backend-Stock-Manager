-- DropIndex
DROP INDEX "Establishments_matrix_Id_key";

-- DropIndex
DROP INDEX "Functionaries_establishment_Id_key";

-- DropIndex
DROP INDEX "InOuts_establishment_Id_key";

-- DropIndex
DROP INDEX "Products_establishment_Id_key";

-- DropIndex
DROP INDEX "Sales_establishment_Id_key";

-- DropIndex
DROP INDEX "SoldProducts_product_Id_key";

-- DropIndex
DROP INDEX "SoldProducts_sale_Id_key";

-- CreateTable
CREATE TABLE "MatrixesRefreshToken" (
    "id" TEXT NOT NULL,
    "expires_In" INTEGER NOT NULL,
    "matrix_Id" TEXT NOT NULL,

    CONSTRAINT "MatrixesRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FunctionariesRefreshToken" (
    "id" TEXT NOT NULL,
    "expires_In" INTEGER NOT NULL,
    "functionary_Id" TEXT NOT NULL,

    CONSTRAINT "FunctionariesRefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MatrixesRefreshToken_matrix_Id_key" ON "MatrixesRefreshToken"("matrix_Id");

-- CreateIndex
CREATE UNIQUE INDEX "FunctionariesRefreshToken_functionary_Id_key" ON "FunctionariesRefreshToken"("functionary_Id");

-- AddForeignKey
ALTER TABLE "MatrixesRefreshToken" ADD CONSTRAINT "MatrixesRefreshToken_matrix_Id_fkey" FOREIGN KEY ("matrix_Id") REFERENCES "Matrixes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FunctionariesRefreshToken" ADD CONSTRAINT "FunctionariesRefreshToken_functionary_Id_fkey" FOREIGN KEY ("functionary_Id") REFERENCES "Functionaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
