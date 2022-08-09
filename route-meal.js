const express = require('express')
const router = express.Router()
const data=require('./data')
const random = require('random')
const { getMeals, updateRecipie, addRecipie, deleteRec, mistake, getRandomDinner, getRandomLunch, getRandomBrakfaset } = require('./contrllers/router-controle')
router.get('/',getMeals)
router.get('/Dinner',getRandomDinner)
router.get('/Lunch',getRandomLunch)
router.get('/Brakfaset',getRandomBrakfaset)

router.post('/update/:name',updateRecipie)

router.post('/add',addRecipie)

router.post('/delete/:name',deleteRec)

router.all('*', mistake)  

module.exports = router