/*
  Warnings:

  - Changed the type of `yearModel` on the `cadastros_carros` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `yearManufacturing` on the `cadastros_carros` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `kmWheelsets` on the `cadastros_carros` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cadastros_carros" DROP COLUMN "yearModel",
ADD COLUMN     "yearModel" INTEGER NOT NULL,
DROP COLUMN "yearManufacturing",
ADD COLUMN     "yearManufacturing" INTEGER NOT NULL,
DROP COLUMN "kmWheelsets",
ADD COLUMN     "kmWheelsets" INTEGER NOT NULL,
ALTER COLUMN "favorite" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "cadastrosId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_cadastrosId_fkey" FOREIGN KEY ("cadastrosId") REFERENCES "cadastros_carros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
