/**
 * @file Manages route related to index page
 * @author Elizabeth Minty
 */
// Import the Express module
import express from "express"

// Create an Express router
const router = express.Router()

// Create a GET route that displays all possible routes
router.get("/", (req, res) => {
  let x = [
    "http://localhost:3000/api/colosseums",
    "http://localhost:3000/api/events",
    "http://localhost:3000/api/participants",
    "http://localhost:3000/api/animals",
    "http://localhost:3000/api/teams",
    "http://localhost:3000/api/awards",
  ]
  res.send(x)
})

// Export the router
export default router
