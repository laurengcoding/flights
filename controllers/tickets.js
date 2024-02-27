const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({});
    res.render('tickets/new', { title: 'Add Ticket', tickets, flight});
};

async function create(req, res) {
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/flights');
};

async function addToFlight(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({});
    flight.push(req.body.tickets);
    await flight.save();
    res.redirect('/flights/' + flight._id);
}