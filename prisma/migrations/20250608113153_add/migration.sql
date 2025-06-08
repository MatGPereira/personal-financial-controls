/*
  Warnings:

  - Added the required column `amount` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "amount" DECIMAL(65,30) NOT NULL;
