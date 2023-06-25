
const express = require('express')
const app = express()
const port = 3001
const cors = require("cors")
const mongoose = require("mongoose")

// middleware
app.use(cors())



// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/register', (req, res) => {
    res.send('Hello World!')
})


app.post('/login', (req, res) => {
    res.send('Hello World!')
})




mongoose.connect("mongodb+srv://admin:dAq7mHPoUJsZ82GM@nasa.uy1vnps.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongosedb connected!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        });

    })
    .catch((error) => {
        console.log(error)
    })