// Import the Express module
import express from 'express'

// Import the index routes module
import indexRoutes from './routes/index.js'
import animalRoutes from './routes/animal.js'
import participantRoutes from './routes/participant.js'
import eventRoutes from './routes/event.js'
import teamRoutes from './routes/team.js'
import customerRoutes from './routes/customer.js'
import colosseumRoutes from './routes/colosseum.js'
import awardRoutes from './routes/award.js'
import ticketRoutes from './routes/ticket.js'

//delete later
import departmentRoutes from './routes/department.js'
import institutionRoutes from './routes/institution.js'

// Create an Express application
const app = express()

// This should be declared under const app = express();
app.use(express.urlencoded({ extended: false })) // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under app.use(urlencoded({ extended: false }));
app.use(express.json()) // To parse the incoming requests with JSON payloads. For example, REST API requests

// Use the routes module
app.use('/', indexRoutes)
app.use('/api/animals', animalRoutes)
app.use('/api/participants', participantRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/teams', teamRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/colosseums', colosseumRoutes)
app.use('/api/awards', awardRoutes)
app.use('/api/tickets', ticketRoutes)


// delete later
app.use('/api/institutions', institutionRoutes)
app.use('/api/departments', departmentRoutes)

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000.')
})

// Export the Express application. Other modules may use it. For example, API testing
export default app
