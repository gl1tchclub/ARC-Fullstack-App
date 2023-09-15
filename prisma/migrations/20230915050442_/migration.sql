/*
  Warnings:

  - The primary key for the `Animal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `animalId` on the `Animal` table. All the data in the column will be lost.
  - The primary key for the `Award` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `awardId` on the `Award` table. All the data in the column will be lost.
  - The primary key for the `Colosseum` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `colosseumId` on the `Colosseum` table. All the data in the column will be lost.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `eventId` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Participant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `participantId` on the `Participant` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `teamId` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_pkey",
DROP COLUMN "animalId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Animal_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Award" DROP CONSTRAINT "Award_pkey",
DROP COLUMN "awardId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Award_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Colosseum" DROP CONSTRAINT "Colosseum_pkey",
DROP COLUMN "colosseumId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Colosseum_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "eventId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_pkey",
DROP COLUMN "participantId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Participant_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "teamId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");
