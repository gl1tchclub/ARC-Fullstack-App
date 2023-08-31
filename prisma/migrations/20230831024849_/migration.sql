/*
  Warnings:

  - Added the required column `eventName` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numMembers` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "eventName" TEXT NOT NULL,
ADD COLUMN     "numMembers" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventName_fkey" FOREIGN KEY ("eventName") REFERENCES "Event"("eventName") ON DELETE RESTRICT ON UPDATE CASCADE;
