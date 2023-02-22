const express = require("express");
const logger = require("./middleware/logger")


const app = express();

app.use(logger)

app.use(express.static(__dirname + "/public"))




const PORT = 5001

app.listen(PORT, (err) => {
    err ? console.log(err)
    : console.log(`"server is running on port ${PORT}"`)
})