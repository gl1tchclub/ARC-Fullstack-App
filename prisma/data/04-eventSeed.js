import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
const name = "event"
const data = [
  {
    eventTitle: "Tartaros Promos",
    venue: "Abyss of Agony",
    date: "12-09-2024T11:00:00"
  },
  {
    eventTitle: "Immortal Finals",
    venue: "Immortal Hall",
    date: "02-12-2027T19:00:00"
  },
  {
    eventTitle: "Immortal vs. Valhalla",
    venue: "Immortal Hall",
    date: "08-10-2025T12:00:00"
  },
  {
    eventTitle: "Arctic Warfare",
    venue: "Colossal Clash Arena",
    date: "20-11-2024T11:00:00"
  },
  {
    eventTitle: "Arctic Finals",
    venue: "Colossal Clash Arena",
    date: "15-03-2023T13:30:00"
  },
  {
    eventTitle: "Undying Promos",
    venue: "Colossal Clash Arena",
    date: "08-07-2024T00:00:00"
  },
  {
    eventTitle: "Tower Game",
    venue: "Imperium Spire",
    date: "02-06-2027T19:00:00"
  },
  {
    eventTitle: "Champion's Honor",
    venue: "Gladiator's Gauntlet",
    date: "02-08-2026T19:00:00"
  },
  {
    eventTitle: "Claws n Fangs",
    venue: "Death's Embrace",
    date: "02-08-2026T22:00:00"
  },
  {
    eventTitle: "Death Battle: Tartaros",
    venue: "Death's Embrace",
    date: "01-10-2026T22:00:00"
  },
  {
    eventTitle: "Olympus Championship",
    venue: "BattleDome Maximus",
    date: "22-01-2026T22:00:00"
  },
  {
    eventTitle: "Gladiator Triumph",
    venue: "BattleDome Maximus",
    date: "22-01-2026T23:00:00"
  },
  {
    eventTitle: "Elysium Showdown",
    venue: "BattleDome Maximus",
    date: "22-06-2026T23:00:00"
  },
  {
    eventTitle: "Valhalla Clash",
    venue: "Nightmare Colosseum",
    date: "22-06-2026T00:00:00"
  },
  {
    eventTitle: "Olympus: Battle For Radiance",
    venue: "God's Arena",
    date: "22-06-2023T00:00:00"
  },
  {
    eventTitle: "Empire Championship",
    venue: "Apex Arena",
    date: "28-05-2023T00:00:00"
  },
  {
    eventTitle: "Finals: Empire Rank",
    venue: "Victory Vault",
    date: "28-05-2023T07:00:00"
  },
  {
    eventTitle: "Finals: Undying Rank",
    venue: "Arena of Champions",
    date: "10-05-2023T07:00:00"
  },
  {
    eventTitle: "Finals: Tartaros Rank",
    venue: "Titan Arena",
    date: "10-08-2023T07:00:00"
  },
  {
    eventTitle: "Robots v Mammals: Up To Immortal Only",
    venue: "Elysium Battlegrounds",
    date: "10-12-2023T16:00:00"
  },
  {
    eventTitle: "Lower Rank Royale",
    venue: "Empire's Wargrounds",
    date: "20-12-2023T16:00:00"
  },
  {
    eventTitle: "Gladitorial Games",
    venue: "Challengers of Fate",
    date: "20-09-2023T16:00:00"
  },
  {
    eventTitle: "Winter's Hunt",
    venue: "Arctic DeathBattle",
    date: "20-09-2024T16:00:00"
  },
  {
    eventTitle: "Elysium War",
    venue: "Arena of Ares",
    date: "20-10-2024T16:00:00"
  },
  {
    eventTitle: "Chariot Challenge",
    venue: "House of Nike",
    date: "21-10-2024T16:00:00"
  },
  {
    eventTitle: "King of the Skies: Birds Only",
    venue: "Unknown",
    date: "21-07-2024T17:00:00"
  },
  {
    eventTitle: "King of the Lands",
    venue: "Eternal Battle Amphitheater",
    date: "21-01-2024T17:00:00"
  },
  {
    eventTitle: "King of the Seas",
    venue: "Heroes Hall",
    date: "01-01-2024T17:00:00"
  },
  {
    eventTitle: "Hero's Quest",
    venue: "Gate to Valhalla",
    date: "04-11-2026T12:45:00"
  },
  {
    eventTitle: "Devil's Carnage: Tartaros",
    venue: "Tartaros Pit",
    date: "02-11-2026T12:45:00"
  },
  {
    eventTitle: "Redemption Challenge",
    venue: "Undying Graveyard",
    date: "18-05-2025T08:00:00"
  },
  {
    eventTitle: "King's Tournament - Finals",
    venue: "Imperial Battlegrounds",
    date: "09-09-2025T14:20:00"
  },
  {
    eventTitle: "King's Tournament - Semifinals",
    venue: "Imperial Battlegrounds",
    date: "09-09-2024T17:00:00"
  },
  {
    eventTitle: "King's Tournament - 1st Bracket",
    venue: "Imperial Battlegrounds",
    date: "09-09-2023T19:00:00"
  },
]

export { name, data }
