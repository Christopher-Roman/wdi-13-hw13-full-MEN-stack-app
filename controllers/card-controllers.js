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









module.exports = router;