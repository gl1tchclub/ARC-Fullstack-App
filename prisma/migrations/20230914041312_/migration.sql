-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('OLYMPUS', 'ELYSIUM', 'VALHALLA', 'IMMORTAL', 'EMPIRE', 'UNDYING', 'TARTAROS');

-- CreateEnum
CREATE TYPE "Taxonomy" AS ENUM ('MAMMAL', 'FISH', 'AMPHIBIAN', 'REPTILE', 'BIRD', 'INSECT', 'MUTANT', 'DINOSAUR', 'ROBOT');

-- CreateTable
CREATE TABLE "Colosseum" (
    "colosseumId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "terrainType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Colosseum_pkey" PRIMARY KEY ("colosseumId")
);

-- CreateTable
CREATE TABLE "Event" (
    "eventId" SERIAL NOT NULL,
    "eventTitle" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "Award" (
    "awardId" SERIAL NOT NULL,
    "awardTitle" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "eventTitle" TEXT NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("awardId")
);

-- CreateTable
CREATE TABLE "Team" (
    "teamId" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "eventTitle" TEXT,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "numMembers" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId")
);

-- CreateTable
CREATE TABLE "Participant" (
    "participantId" SERIAL NOT NULL,
    "alias" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "memberOf" TEXT,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("participantId")
);

-- CreateTable
CREATE TABLE "Animal" (
    "animalId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "taxonomy" "Taxonomy" NOT NULL,
    "species" TEXT NOT NULL,
    "rank" "Rank" NOT NULL,
    "ownerName" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("animalId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Colosseum_name_key" ON "Colosseum"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventTitle_key" ON "Event"("eventTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_key" ON "Team"("teamName");

-- CreateIndex
CREATE UNIQUE INDEX "Team_city_key" ON "Team"("city");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_alias_key" ON "Participant"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_name_key" ON "Animal"("name");

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
