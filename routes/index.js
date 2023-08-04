// Import the Express module
import express from 'express'

// This should be declared under import indexRoutes from "./routes/index.js";
import institutionRoutes from "./routes/institution.js"

// Import the index controllers module
import { get } from '../controllers/index.js'

// Create an Express router
const router = express.Router()

// Create a GET route
router.get('/', get)

// This should be declared under const app = express();
app.use(urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under app.use(urlencoded({ extended: false }));
app.use(json()); // To parse the incoming requests with JSON payloads. For example, REST API requests

// This should be declared under app.use("/", indexRoutes);
app.use("/api/institutions", institutionRoutes);

// Export the router
export default router
