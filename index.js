// Import the Express module
import express from 'express'
import rateLimit from 'express-rate-limit'

// Import the index routes module
import indexRoutes from './routes/index.js'
import animalRoutes from './routes/animal.js'
import participantRoutes from './routes/participant.js'
import eventRoutes from './routes/event.js'
import teamRoutes from './routes/team.js'
import colosseumRoutes from './routes/colosseum.js'
import awardRoutes from './routes/award.js'

// Create an Express application
const app = express()

//Limit the number of API requests per minute to 100
const limit = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: async (request, response) => {
        return 'You have exceeded the number of requests per minute: 100. Please try again later'
    },
})

// This should be declared under const app = express();
app.use(express.urlencoded({ extended: false })) // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under app.use(urlencoded({ extended: false }));
app.use(express.json()) // To parse the incoming requests with JSON payloads. For example, REST API requests
app.use(limit)

// Use the routes module
app.use('/', indexRoutes)
app.use('/api/animals', animalRoutes)
app.use('/api/participants', participantRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/teams', teamRoutes)
app.use('/api/colosseums', colosseumRoutes)
app.use('/api/awards', awardRoutes)

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000.')
})

// Export the Express application. Other modules may use it. For example, API testing
export default app
