var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET /flights
router.get('/', flightsController.index);

// GET /flights/new
router.get('/new', flightsController.new);

// GET /flights/:id (show)
router.get('/:id', flightsController.show);

// POST /flights
router.post('/', flightsController.create);




module.exports = router;
