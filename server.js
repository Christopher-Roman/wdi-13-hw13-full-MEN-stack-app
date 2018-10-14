const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
require('./db/db');

const cardsController = require('./controllers/card-controllers');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/card-controllers', cardsController);

app.listen(PORT, () => {
	console.log('listening on port: ' + PORT);
})