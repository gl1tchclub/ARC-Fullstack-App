import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try { 
    await prisma.institution.create({
        data: {}
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