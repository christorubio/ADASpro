const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

let workorderSchema = new Schema({
    //_id: Number,
    _id: { type: String, default: uuid.v1 },
    workOrder: {
      type: String,
      
    },
    shopName: {
      type: String,
      
    },
    firstName: {
      type: String,
      
    },
    lastName: {
      type: String,
      
    },
     carMake: {
      type: String,
      
    },
    carModel: {
      type: String,
      
    },
    carYear: {
      type: Number,
      
    },
    carVin: {
      type: String,
      
    },
    mileage: {
      type: Number,
      
    },
    licPlate: {
      type: String,
      
    },
    workPerf: {
        type: String,
        
    },
    price: {
        type: String,
        
      },
      
  }, {
    collection: 'workorder'
});

//this allows the schema to be exported and used by the api
module.exports = mongoose.model('workorder', workorderSchema)
