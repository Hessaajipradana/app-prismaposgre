-- CreateTable
CREATE TABLE "Merek" (
    "id" SERIAL NOT NULL,
    "namaMerek" TEXT NOT NULL,

    CONSTRAINT "Merek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "namaProduk" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "tanggalBuat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggalUbah" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "merekId" INTEGER NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produk" ADD CONSTRAINT "Produk_merekId_fkey" FOREIGN KEY ("merekId") REFERENCES "Merek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
