// Import the Express module
import express from 'express'

// This should be declared under import indexRoutes from "./routes/index.js";
import institutionRoutes from './routes/institution.js'

// Import the index routes module
import indexRoutes from './routes/index.js'
import aboutRoutes from './routes/about.js'
import coursesRoutes from './routes/courses.js'
import contactRoutes from './routes/contact.js'

// Create an Express application
const app = express()

// This should be declared under const app = express();
app.use(express.urlencoded({ extended: false })) // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under app.use(urlencoded({ extended: false }));
app.use(express.json()) // To parse the incoming requests with JSON payloads. For example, REST API requests

// Use the routes module
app.use('/', indexRoutes)
app.use('/about', aboutRoutes)
app.use('/courses', coursesRoutes)
app.use('/contact', contactRoutes)

// This should be declared under app.use("/", indexRoutes);
app.use('/api/institutions', institutionRoutes)

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000.')
})

// Export the Express application. Other modules may use it. For example, API testing
export default app
