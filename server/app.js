const express = require('express')
const app = express()
const cors = require('cors');
// const bodyParser = require('body-parser');

app.use(cors());

// //Saying we will be using json data throughout our application
// app.use(bodyParser.json());

const errorMsg = {"error: ": "Invalid site name"}

// this is the root route
app.get('/', (req, res) => {
    try {
        res.statusCode = 200;
        res.send('RADD-Journal!')
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }
  
})

//exporting
module.exports = app
