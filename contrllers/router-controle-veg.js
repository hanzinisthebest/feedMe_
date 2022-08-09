const random = require('random')
const mealVeg=require('../models/meals-veg')
const asyncHandler=require('express-async-handler')

const getMeals=asyncHandler(async(req,res)=>{
  //await Meal.deleteMany({})
  const recips=await mealVeg.find()
    res.status(200).json(recips)
  })

const randomAct=(arr)=>{
  if(!arr.length){ 
    return res.status(200).send(arr)
  }
    return res.status(200).json(arr[random.int((min = 0), (max = dinner.length-1))])
}
const getRandomDinner=asyncHandler( async(req,res)=>{
  const dinner=await mealVeg.find({typeMeal:"dinner"})  
  randomAct(dinner)
   })

const getRandomLunch=asyncHandler(async(req,res)=>{
  const lunch=await mealVeg.find({typeMeal:"lunch"})  
  randomAct(lunch)
})

const getRandomBrakfaset=asyncHandler(async(req,res)=>{
const brakfaset=await mealVeg.find({typeMeal:"brakfaset"})  
randomAct(brakfaset)
})

/*const create=async(meal,name)=>{
  const recp= await Meal.create({
    name:name,
    typeMeal:meal
  })
  return recp
}*/

const addRecipie=asyncHandler(async(req,res)=>{
  const {meal,name}=req.body
  if(!name||!meal){
    return res.status(404).send("send right information")
  }
  if(meal==="dinner"){
    const recp=await mealVeg.create({
      name:name,
      typeMeal:meal
    })
    console.log(recp);
    return res.status(200).json(recp)
    }


    else if(meal==="lunch")
    {
      const recp=await mealVeg.create({
        name:name,
        typeMeal:meal
      })
      console.log(recp);
      return res.status(200).json(recp)
    }

    else if(meal==="brakfaset"){
      const recp=await mealVeg.create({
        name:name,
        typeMeal:meal
      })
      console.log(recp);
      return res.status(200).json(recp)
    }
    res.status(404).send("please provide a type of meal you want ")

})



const updateRecipie=asyncHandler(async(req,res)=>{
    const {name}=req.params
    const {meal,newName}=req.body
    console.log(name);

    if(!meal||!name||!newName||!mealVeg.find({name:name,typeMeal:meal}))
    {
      return res.status(404).send("please provide all the deatiles")
    }
    // await Meal.updateOne({name:name},{name:newName})
    // const update=await Meal.findOne({name:newName})
    const update=await mealVeg.findOneAndUpdate({ name: name },
    {name:newName },
    // If `new` isn't true, `findOneAndUpdate()` will return the
    // document as it was _before_ it was updated.
    { new: true })
    console.log(update)
    return res.status(200).json(update)
})



const deleteRec=asyncHandler(async(req,res)=>{
    const {meal}=req.body
    const {name}=req.params
    if(!meal||!name||!mealVeg.find({name:name,typeMeal:meal})){
      return res.status(404).send("send right information")
    }
    const deleted = await mealVeg.findOneAndDelete({ name: name })
    console.log(deleted)
    res.status(200).json(deleted)
  
    
  })
  
  const mistake= (req, res) => {
    res.status(404).send('resource not found')
  }

  module.exports={
    getMeals,
    getRandomDinner,
    getRandomLunch,
    getRandomBrakfaset,
    updateRecipie,
    addRecipie,
    deleteRec,
    mistake
  }