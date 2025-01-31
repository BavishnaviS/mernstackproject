const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  venue: { type: String, required: true },  
  price: { type: Number, required: true }   
});

module.exports = mongoose.model('Event', EventSchema);
