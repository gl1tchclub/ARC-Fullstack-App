-- CreateTable
CREATE TABLE "Animal" (
    "animalId" SERIAL NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("animalId")
);

-- CreateTable
CREATE TABLE "Enclosure" (
    "enclosureId" SERIAL NOT NULL,

    CONSTRAINT "Enclosure_pkey" PRIMARY KEY ("enclosureId")
);

-- CreateTable
CREATE TABLE "Staff" (
    "staffId" SERIAL NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("staffId")
);
