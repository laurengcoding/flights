const Flight = require('../models/flight');

async function create(req, res) {
    // find flight
    const flight = await Flight.findById(req.params.id);
    // create destination
    flight.destinations.push(req.body);
    // save changes
    flight.save();
    //redirect back to this flight
    res.redirect('/flights/' + flight._id);
};

module.exports = {
    create
};