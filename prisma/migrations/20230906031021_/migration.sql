/*
  Warnings:

  - Changed the type of `class` on the `Animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rank` on the `Animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('OLYMPUS', 'ELYSIUM', 'VALHALLA', 'IMMORTAL', 'EMPIRE', 'UNDYING', 'TARTAROS');

-- CreateEnum
CREATE TYPE "Class" AS ENUM ('MAMMAL', 'FISH', 'AMPHIBIAN', 'REPTILE', 'BIRD', 'INSECT', 'MUTANT', 'DINOSAUR', 'ROBOT');

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "class",
ADD COLUMN     "class" "Class" NOT NULL,
DROP COLUMN "rank",
ADD COLUMN     "rank" "Rank" NOT NULL;

-- AlterTable
ALTER TABLE "Colosseum" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropEnum
DROP TYPE "Classes";

-- DropEnum
DROP TYPE "Ranks";
