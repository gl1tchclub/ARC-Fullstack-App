/*
  Warnings:

  - You are about to drop the column `terrain` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[eventName]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `terrainType` to the `Colosseum` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_eventId_fkey";

-- DropIndex
DROP INDEX "Colosseum_country_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "terrain";

-- AlterTable
ALTER TABLE "Colosseum" ADD COLUMN     "terrainType" TEXT NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Ticket";

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventName_key" ON "Event"("eventName");
