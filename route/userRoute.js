//requiring/importing express for the userRoute File
const { response } = require('express');
const express = require('express');

//creating a router variable o enable us write an endpoint with the router method
const router = express.Router();

//my first endpoint
router.post('/signup', (req, res)=>{
console.log(req.body)
res.json("Your input has being received successfully")
})




module.exports = router;

