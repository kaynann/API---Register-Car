/*
  Warnings:

  - Made the column `favorite` on table `cadastros_carros` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cadastros_carros" ALTER COLUMN "favorite" SET NOT NULL;
