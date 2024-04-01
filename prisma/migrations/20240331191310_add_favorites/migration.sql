/*
  Warnings:

  - You are about to drop the column `favorite` on the `cadastros_carros` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `images` to the `cadastros_carros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_cadastrosId_fkey";

-- AlterTable
ALTER TABLE "cadastros_carros" DROP COLUMN "favorite",
ADD COLUMN     "images" TEXT NOT NULL;

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "favorite_cars" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "favorite_cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favorite_cars" ADD CONSTRAINT "favorite_cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_cars" ADD CONSTRAINT "favorite_cars_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cadastros_carros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
