const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();

const app = express();



let ROModel = require('./models/workOrder.js')



mongoose
    .connect('mongodb://localhost:27017/ADASPro') //read server path from .env file
    .then(() => {
        console.log("Database Connection Secured")
    })
    .catch((err) => {
        console.log("Mongo Connection Error", err)
    })

//Tell the app to listen on port 3000 for request
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Get entire WO collection 
app.get('/workorder', (req, res, next) => {
    ROModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

//Post new WO
app.post('/workorder', (req, res, next) => {
    
    ROModel.create(req.body, (error, data) =>{
        if(error){
            return next(error)
        } else {
            res.send("New WO has been created.")
        }
    });
});

app.listen(PORT, () => {
    console.log('Server running on port 3000');
})