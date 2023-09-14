import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const eventData = [
  {
    eventTitle: "Tartaros Promos",
    venue: "Abyss of Agony",
    date: "12-09-2024T11:00:00",
    awards: [awardData],
    teams: [teamData],
  },
  {
    eventTitle: "Finals",
    venue: "Immortal Hall",
    date: "08-10-2025T11:00:00",
    awards: [awardData],
    teams: [teamData],
  },
]

export { eventData }
