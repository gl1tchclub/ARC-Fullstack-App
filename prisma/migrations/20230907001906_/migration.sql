-- DropForeignKey
ALTER TABLE "Award" DROP CONSTRAINT "Award_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_location_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_eventName_fkey";

-- DropIndex
DROP INDEX "Award_awardName_key";

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "eventName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_location_fkey" FOREIGN KEY ("location") REFERENCES "Colosseum"("colosseumName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventName_fkey" FOREIGN KEY ("eventName") REFERENCES "Event"("eventName") ON DELETE CASCADE ON UPDATE CASCADE;
