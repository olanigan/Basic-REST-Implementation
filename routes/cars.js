var express = require('express');
var router = express.Router();
var cars = [
	{
	name: "audi",
	price: 10000
		},
	{
	name: "bmw",
	price: 25000
	},
	{
	name: "mercedes",
	price: 34000
	}];
/* GET home page. */
router.get('/', function(req, res) {
 res.send("Car page");
});

/* GET Car Name Page */
router.get('/:carName/', function(req,res){
	var carName = req.params.carName;

	var price = 0;
	for(var i=0; i <cars.length;i++){
		if(cars[i].name == carName){
			price = cars[i].price;
		}
	}
	res.send("The price for car " + carName + " is " +  price);
});

/* POST test page */
router.post('/', function(req, res) {
 // Check that there is a body
if(!req.body) {
//No body found, send an error to the client
res.status(500).send({error : "No body found!"});
// And return, so nothing beyong this gets executed
return;
 }
 // POST messages SHOULD ALWAYS contain JSON in their body
 var json = req.body;
 // Just echo the results back to client
 res.send(json);
});

module.exports = router;
