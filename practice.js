const data=require('./data')
const meal = "lunch"
const id= "1";
console.log(data.meal)
const searchObject=data.meal.find((recipe)=>recipe.id===id)
console.log(searchObject)