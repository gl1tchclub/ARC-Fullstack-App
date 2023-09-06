/*
  Warnings:

  - You are about to drop the column `class` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `taxonomy` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Taxonomy" AS ENUM ('MAMMAL', 'FISH', 'AMPHIBIAN', 'REPTILE', 'BIRD', 'INSECT', 'MUTANT', 'DINOSAUR', 'ROBOT');

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "class",
ADD COLUMN     "taxonomy" "Taxonomy" NOT NULL;

-- DropEnum
DROP TYPE "Class";
