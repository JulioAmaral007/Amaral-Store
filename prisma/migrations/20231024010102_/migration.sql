/*
  Warnings:

  - You are about to drop the column `discountPercentage` on the `order_product` table. All the data in the column will be lost.
  - You are about to drop the column `discountPercentage` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order_product" DROP COLUMN "discountPercentage",
ADD COLUMN     "discountPercent" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "discountPercentage",
ADD COLUMN     "discountPercent" INTEGER NOT NULL DEFAULT 0;
