import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.colosseum.create({
      data: [
        {
          name: "Abyss of Agony",
          country: "Canada",
          city: "Toronto",
          terrainType: "Desert",
          createdAt: "2023-09-06T03:58:37.072Z",
          updatedAt: "2023-09-06T03:58:37.072Z",
          events: [],
        },
        {
          name: "Imperial Battlegrounds",
          country: "England",
          city: "London",
          terrainType: "Grasslands",
          createdAt: "2023-09-06T03:59:11.115Z",
          updatedAt: "2023-09-06T03:59:11.115Z",
          events: [],
        },
      ],
    });

    console.log("Database successfully seeded");

    await prisma.$disconnect(); // Disconnect from the database
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1); // Exit the process
  }
};

main();
