const Meal=require('./models/meals')
const { dinner } = require('./data')
const recips= Meal.find()
console.log(recips.all)