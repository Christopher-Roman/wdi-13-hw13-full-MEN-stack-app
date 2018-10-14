const express = require('express');
const router = express.Router();

const Cards = require('../models/cards');

router.get('/', (req, res) => {
	Cards.find({}, (err, allCards) => {
		if(err) {
			console.log(err);
		} else {
			console.log(allCards);
			res.render('index.ejs', {cards: allCards});
		}
	});
});

router.get('/new', (req, res) => {
	res.render('new.ejs')	
});

router.post('/', (req, res) => {
	Cards.create(req.body, (err, createdCard) => {
		if(err) {
			console.log(err);
		} else {
			console.log(createdCard);
			res.redirect('/cards')
		}
	})	
})

router.get('/:id', (req, res) => {
	console.log(req.params);
	Cards.findById(req.params.id, (err, foundCard) => {
		if(err) {
			console.log(err);
		} else {
			console.log(foundCard, ' foundCard');
			res.render('show.ejs', {card: foundCard})
		};
	});	
});







module.exports = router;