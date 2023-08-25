/*
  Warnings:

  - You are about to drop the column `rankId` on the `Animal` table. All the data in the column will be lost.
  - The primary key for the `Award` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ticketId` on the `Award` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `staffId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fight` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[awardName]` on the table `Award` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[colosseumName]` on the table `Colosseum` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[country]` on the table `Colosseum` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[city]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `class` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terrain` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `awardName` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Colosseum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colosseumName` to the `Colosseum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Colosseum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberOf` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfAwards` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `continent` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Classes" AS ENUM ('MAMMAL', 'FISH', 'AMPHIBIAN', 'REPTILE', 'BIRD', 'INSECT');

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "rankId",
ADD COLUMN     "class" "Classes" NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "rank" "Ranks" NOT NULL,
ADD COLUMN     "species" TEXT NOT NULL,
ADD COLUMN     "terrain" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Award" DROP CONSTRAINT "Award_pkey",
DROP COLUMN "ticketId",
ADD COLUMN     "awardId" SERIAL NOT NULL,
ADD COLUMN     "awardName" TEXT NOT NULL,
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD CONSTRAINT "Award_pkey" PRIMARY KEY ("awardId");

-- AlterTable
ALTER TABLE "Colosseum" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "colosseumName" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "memberOf" TEXT NOT NULL,
ADD COLUMN     "numberOfAwards" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "staffId",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "continent" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "teamId" SERIAL NOT NULL,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId");

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "Fight";

-- CreateTable
CREATE TABLE "Event" (
    "eventId" SERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticketId" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "isVip" BOOLEAN NOT NULL,
    "isPremium" BOOLEAN NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticketId")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,
    "customerAlias" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "isRegular" BOOLEAN NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Award_awardName_key" ON "Award"("awardName");

-- CreateIndex
CREATE UNIQUE INDEX "Colosseum_colosseumName_key" ON "Colosseum"("colosseumName");

-- CreateIndex
CREATE UNIQUE INDEX "Colosseum_country_key" ON "Colosseum"("country");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_city_key" ON "Team"("city");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_memberOf_fkey" FOREIGN KEY ("memberOf") REFERENCES "Team"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Participant"("participantId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_location_fkey" FOREIGN KEY ("location") REFERENCES "Colosseum"("colosseumName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
