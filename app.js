const express   = require('express');
const bodyParser = require('body-parser');
const path      = require('path');
const mongoose  = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();

mongoose.connect('mongodb://localhost:27017/credits-tracker', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true); // Deprecation fix 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  
});

const Credit = require('./models/credit-model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public')));

const indexRoutes = require('./routes/index-routes');

app.use('/', indexRoutes);


app.set('views', './views');
app.set('view engine', 'pug');

app.listen(3000, () => {
  console.log("Running on local host: 3000");
});

module.exports = app