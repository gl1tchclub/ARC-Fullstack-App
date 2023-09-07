-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_memberOf_fkey";

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "memberOf" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_memberOf_fkey" FOREIGN KEY ("memberOf") REFERENCES "Team"("name") ON DELETE SET NULL ON UPDATE CASCADE;
