var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
 res.send("Test page");
});

/* GET Test Create Page */
router.get('/create/', function(req, res) {
 // render the test page, and pass Test POST page as the title
 res.render('test', { title: 'Test POST Page' });
});

router.get('test/:carId/', function(req,res){
	var carId = req.params.carId
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
