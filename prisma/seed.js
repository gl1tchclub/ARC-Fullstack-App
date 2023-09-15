import { PrismaClient } from "@prisma/client"

const seeds = ["./data/01-participantSeed.js", "./data/02-animalSeed.js"]
const prisma = new PrismaClient()

const main = async () => {
  try {
    for (let i = 0; i < seeds.length; i++) {
      let { name, data } = await import(seeds[i])
      await prisma[name].createMany({
        data: data,
      })
    }

    console.log("Database successfully seeded")

    await prisma.$disconnect() // Disconnect from the database
  } catch (err) {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1) // Exit the process
  }
}

main()
