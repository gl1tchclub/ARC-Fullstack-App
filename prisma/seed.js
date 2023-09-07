import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try { 
    await prisma.institution.create({
        data: [
            {
                "colosseumId": 1,
                "colosseumName": "Abyss of Agony",
                "country": "Canada",
                "city": "Toronto",
                "terrainType": "Desert",
                "createdAt": "2023-09-06T03:58:37.072Z",
                "updatedAt": "2023-09-06T03:58:37.072Z",
                events: {
                    create: [
                        {
                            //create events the same way
                        }
                    ]
                }
            },
            {
                "colosseumId": 2,
                "colosseumName": "Imperial Battlegrounds",
                "country": "England",
                "city": "London",
                "terrainType": "Grasslands",
                "createdAt": "2023-09-06T03:59:11.115Z",
                "updatedAt": "2023-09-06T03:59:11.115Z"
            },
            {
                "colosseumId": 3,
                "colosseumName": "Immortal Hall",
                "country": "America",
                "city": "Maine",
                "terrainType": "Arctic",
                "createdAt": "2023-09-06T04:03:46.579Z",
                "updatedAt": "2023-09-06T04:03:46.579Z"
            },
            {
                "colosseumId": 4,
                "colosseumName": "Empire Hall",
                "country": "America",
                "city": "Texas",
                "terrainType": "Desert",
                "createdAt": "2023-09-06T04:04:48.606Z",
                "updatedAt": "2023-09-06T04:04:48.606Z"
            },
            {
                "colosseumId": 5,
                "colosseumName": "Undying Grounds",
                "country": "America",
                "city": "Florida",
                "terrainType": "Caves",
                "createdAt": "2023-09-06T04:05:16.276Z",
                "updatedAt": "2023-09-06T04:05:16.276Z"
            },
            {
                "colosseumId": 6,
                "colosseumName": "Hell's Gate",
                "country": "America",
                "city": "Wyoming",
                "terrainType": "Volcanic",
                "createdAt": "2023-09-06T04:07:34.198Z",
                "updatedAt": "2023-09-06T04:07:34.198Z"
            },
            {
                "colosseumId": 7,
                "colosseumName": "Beginner's Arena",
                "country": "Ukraine",
                "city": "Dzembronya",
                "terrainType": "Grasslands",
                "createdAt": "2023-09-06T04:18:37.819Z",
                "updatedAt": "2023-09-06T04:18:37.819Z"
            },
            {
                "colosseumId": 8,
                "colosseumName": "Elysium Stadium",
                "country": "Madagascar",
                "city": "Antsalova",
                "terrainType": "Forest",
                "createdAt": "2023-09-06T04:21:10.851Z",
                "updatedAt": "2023-09-06T04:21:10.851Z"
            },
            {
                "colosseumId": 9,
                "colosseumName": "Valhalla's Verge",
                "country": "Scotland",
                "city": "Edinburgh",
                "terrainType": "Urban",
                "createdAt": "2023-09-06T04:22:19.401Z",
                "updatedAt": "2023-09-06T04:22:19.401Z"
            },
            {
                "colosseumId": 10,
                "colosseumName": "Titan's Arena",
                "country": "Greece",
                "city": "Athens",
                "terrainType": "Ruins",
                "createdAt": "2023-09-06T04:23:24.946Z",
                "updatedAt": "2023-09-06T04:23:24.946Z"
            },
            {
                "colosseumId": 11,
                "colosseumName": "Seraphin",
                "country": "Scotland",
                "city": "St Andrews",
                "terrainType": "Dreamscape",
                "createdAt": "2023-09-06T04:24:27.691Z",
                "updatedAt": "2023-09-06T04:24:27.691Z"
            },
            {
                "colosseumId": 12,
                "colosseumName": "Arcane Amphitheater",
                "country": "Australia",
                "city": "Perth",
                "terrainType": "Marine",
                "createdAt": "2023-09-06T04:26:02.419Z",
                "updatedAt": "2023-09-06T04:26:02.419Z"
            },
            {
                "colosseumId": 13,
                "colosseumName": "Siren's Embrace",
                "country": "America",
                "city": "Mariana Islands",
                "terrainType": "Marine",
                "createdAt": "2023-09-06T04:27:40.477Z",
                "updatedAt": "2023-09-06T04:27:40.477Z"
            },
            {
                "colosseumId": 14,
                "colosseumName": "AquaGladia",
                "country": "Spain",
                "city": "Atlantis",
                "terrainType": "Marine",
                "createdAt": "2023-09-06T04:29:06.128Z",
                "updatedAt": "2023-09-06T04:29:06.128Z"
            }
        ]
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