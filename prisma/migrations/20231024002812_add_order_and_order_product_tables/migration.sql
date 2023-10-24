/*
  Warnings:

  - You are about to drop the column `discountPercent` on the `product` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('WAITING_FOR_PAYMENT', 'PAYMENT_CONFIRMED');

-- AlterTable
ALTER TABLE "product" DROP COLUMN "discountPercent",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "OrderStatus" NOT NULL DEFAULT 'WAITING_FOR_PAYMENT',

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_product" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "basePrice" DECIMAL(8,2) NOT NULL,
    "discountPercentage" INTEGER NOT NULL DEFAULT 0,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "order_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
