const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	image: String,
	name: {type: String, required: true},
	color: {type: String, required: true},
	cost: {type: String, required: true},
	type: {type: String, required: true},
	text: {type: String, required: true},
	ability: String
})

module.exports = mongoose.model('Cards', cardSchema);