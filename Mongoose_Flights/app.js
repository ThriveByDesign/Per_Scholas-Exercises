const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const flightController = require('./controllers/flightController');

const app = express();

mongoose.connect('mongodb://localhost/flights', {
useNewUrlParser: true,
useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
res.redirect('/flights');
});

app.get('/flights/new', flightController.new);

app.get('/flights', flightController.all);

app.listen(3000, () => {
console.log('Server started on port 3000');
});