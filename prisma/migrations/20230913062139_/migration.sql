/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `awardName` on the `Award` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `Award` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `continent` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `eventName` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[eventTitle]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[alias]` on the table `Participant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teamName]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerName` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `awardTitle` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTitle` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTitle` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venue` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alias` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamName` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Award" DROP CONSTRAINT "Award_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_location_fkey";

-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_memberOf_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_eventName_fkey";

-- DropIndex
DROP INDEX "Event_name_key";

-- DropIndex
DROP INDEX "Participant_name_key";

-- DropIndex
DROP INDEX "Team_name_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "ownerId",
ADD COLUMN     "ownerName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Award" DROP COLUMN "awardName",
DROP COLUMN "eventId",
ADD COLUMN     "awardTitle" TEXT NOT NULL,
ADD COLUMN     "eventTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "location",
DROP COLUMN "name",
ADD COLUMN     "eventTitle" TEXT NOT NULL,
ADD COLUMN     "venue" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "name",
ADD COLUMN     "alias" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "continent",
DROP COLUMN "eventName",
DROP COLUMN "name",
ADD COLUMN     "eventTitle" TEXT,
ADD COLUMN     "teamName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventTitle_key" ON "Event"("eventTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_alias_key" ON "Participant"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_key" ON "Team"("teamName");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_venue_fkey" FOREIGN KEY ("venue") REFERENCES "Colosseum"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_eventTitle_fkey" FOREIGN KEY ("eventTitle") REFERENCES "Event"("eventTitle") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventTitle_fkey" FOREIGN KEY ("eventTitle") REFERENCES "Event"("eventTitle") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_memberOf_fkey" FOREIGN KEY ("memberOf") REFERENCES "Team"("teamName") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_ownerName_fkey" FOREIGN KEY ("ownerName") REFERENCES "Participant"("alias") ON DELETE CASCADE ON UPDATE CASCADE;
