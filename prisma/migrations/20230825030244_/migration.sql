/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Enclosure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Staff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Taxonomy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Ranks" AS ENUM ('OLYMPUS', 'ELYSIUM', 'VALHALLA', 'IMMORTAL', 'EMPIRE', 'UNDYING', 'TARTAROS');

-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_rankId_fkey";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Enclosure";

-- DropTable
DROP TABLE "Staff";

-- DropTable
DROP TABLE "Taxonomy";

-- DropTable
DROP TABLE "Ticket";

-- CreateTable
CREATE TABLE "Country" (
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Participant" (
    "participantId" SERIAL NOT NULL,
    "alias" TEXT NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("participantId")
);

-- CreateTable
CREATE TABLE "Colosseum" (
    "colosseumId" SERIAL NOT NULL,

    CONSTRAINT "Colosseum_pkey" PRIMARY KEY ("colosseumId")
);

-- CreateTable
CREATE TABLE "Team" (
    "staffId" SERIAL NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("staffId")
);

-- CreateTable
CREATE TABLE "Fight" (
    "customerId" SERIAL NOT NULL,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Award" (
    "ticketId" SERIAL NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("ticketId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_country_key" ON "Country"("country");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_alias_key" ON "Participant"("alias");
