const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const PORT = 3000;
require('./db/db');

const cardsController = require('./controllers/card-controllers');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/cards', cardsController);

app.listen(PORT, () => {
	console.log('listening on port: ' + PORT);
})