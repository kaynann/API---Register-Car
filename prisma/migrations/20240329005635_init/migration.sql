/*
  Warnings:

  - The `favorite` column on the `cadastros_carros` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cadastros_carros" DROP COLUMN "favorite",
ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false;
