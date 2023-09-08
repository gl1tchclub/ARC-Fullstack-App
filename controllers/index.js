/**
 * @file operations relating to the home page
 * @author Elizabeth Minty
 */

const get = (req, res) => {
    let x = [
        "http://localhost:3000/api/colosseums",
        "http://localhost:3000/api/events",
        "http://localhost:3000/api/participants",
        "http://localhost:3000/api/animals",
        "http://localhost:3000/api/teams",
        "http://localhost:3000/api/awards"
    ]
    res.send(x);
}

// Export the get function
export { get }
