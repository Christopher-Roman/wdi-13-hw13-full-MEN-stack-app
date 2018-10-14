const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	name: {type: String, required: true},
	color: {type: String, required: true},
	mana-cost: {type: String, required: true},
	text: {type: String, required: true},
	ability: String
})

module.exports = mongoose.model('Card', cardSchema);