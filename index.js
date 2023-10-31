// Import the Express module
import express from "express"
import rateLimit from "express-rate-limit"
import cors from "cors"

// Import the index routes module
import indexRoutes from "./routes/index.js"
import animalRoutes from "./routes/animal.js"
import participantRoutes from "./routes/participant.js"
import eventRoutes from "./routes/event.js"
import teamRoutes from "./routes/team.js"
import colosseumRoutes from "./routes/colosseum.js"
import awardRoutes from "./routes/award.js"

// Create an Express application
const app = express()

//Limit the number of API requests per minute to 100
const limit = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: async (req, res) => {
    return "You have exceeded the number of requests per minute: 100. Please try again later"
  },
})

// To parse the incoming requests with urlencoded payloads. For example, form data
app.use(express.urlencoded({ extended: false }))

// To parse the incoming requests with JSON payloads. For example, REST API requests
app.use(express.json())
app.use(cors())
app.use(limit)

// This code sets up middleware to route incoming requests to different parts of the application.
// It directs requests to specific routes or endpoints for various functionalities.
app.use("/", indexRoutes)
app.use("/api/animals", animalRoutes)
app.use("/api/participants", participantRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/teams", teamRoutes)
app.use("/api/colosseums", colosseumRoutes)
app.use("/api/awards", awardRoutes)
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// })

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000.")
})

// Export the Express application. Other modules may use it. For example, API testing
export default app
