/*
  Warnings:

  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `institutionId` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the `Institution` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_institutionId_fkey";

-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "rankId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "institutionId",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "departmentId" SERIAL NOT NULL,
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentId");

-- DropTable
DROP TABLE "Institution";

-- CreateTable
CREATE TABLE "Taxonomy" (
    "rankId" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "species" TEXT NOT NULL,

    CONSTRAINT "Taxonomy_pkey" PRIMARY KEY ("rankId")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticketId" SERIAL NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticketId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animal_name_key" ON "Animal"("name");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Taxonomy"("rankId") ON DELETE CASCADE ON UPDATE CASCADE;
