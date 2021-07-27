const express = require('express');
const app = express();
//importing the enviroment variable
const dotenv = require('dotenv');
dotenv.config()
//importinfg our userRoute from Route
const userRoute = require('./route/userRoute')
const port = 3000;

app.use(express.json())

app.use('/api/users', userRoute)

//The First route endpoint
app.get('/', (req, res)=>{
    //sending a response to the front end
    res.send("Welcome to my API")

    //logging the request body to the console
    console.log(req.url)
})

//creating our server and logging the success response to the console
app.listen(port, ()=>{
    console.log(`server started at localhost on port:${port}`)
})