const express=require('express')
const app = express()
const data=require('./data')
const random = require('random')
const connectDb=require('./db/mongoCnc')
connectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/meal',require('./route-meal'))
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })