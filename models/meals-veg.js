const mongoose = require('mongoose');
const Schema=mongoose.Schema
const mealSchema= new Schema(
    {
     name:String,
     typeMeal:String
    }
)
module.exports= mongoose.model('mealVeg',mealSchema)