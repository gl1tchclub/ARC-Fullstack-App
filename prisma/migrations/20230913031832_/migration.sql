/*
  Warnings:

  - You are about to drop the column `colosseumName` on the `Colosseum` table. All the data in the column will be lost.
  - You are about to drop the column `eventName` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `alias` on the `Participant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Colosseum` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Participant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Colosseum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_location_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_eventName_fkey";

-- DropIndex
DROP INDEX "Colosseum_colosseumName_key";

-- DropIndex
DROP INDEX "Event_eventName_key";

-- DropIndex
DROP INDEX "Participant_alias_key";

-- AlterTable
ALTER TABLE "Colosseum" DROP COLUMN "colosseumName",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventName",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "alias",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Colosseum_name_key" ON "Colosseum"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_name_key" ON "Participant"("name");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_location_fkey" FOREIGN KEY ("location") REFERENCES "Colosseum"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventName_fkey" FOREIGN KEY ("eventName") REFERENCES "Event"("name") ON DELETE CASCADE ON UPDATE CASCADE;
