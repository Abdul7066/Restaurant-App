const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { connectDB } = require('./config/db')

//dotenv confi
dotenv.config()

//DB connection
connectDB()

//rest object
const app = express()

//middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use('/api/v1/test' , require('./routes/testRoutes'));
//Auth
app.use('/api/v1/auth', require('./routes/authRoutes'))
//User
app.use('/api/v1/user', require('./routes/userRoutes'))
//resturent
app.use('/api/v1/restaurant', require('./routes/restaurantRoutes'))
//category
app.use('/api/v1/category' , require('./routes/categoryRoutes'))
//Food
app.use('/api/v1/food' , require('./routes/foodRoutes'))



const PORT = process.env.PORT || 6000


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})