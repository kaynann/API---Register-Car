-- CreateTable
CREATE TABLE "cadastros_carros" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "yearModel" INTEGER NOT NULL,
    "yearManufacturing" INTEGER NOT NULL,
    "version" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "kmWheelsets" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "cadastros_carros_pkey" PRIMARY KEY ("id")
);
