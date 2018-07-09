const functions  = require('firebase-functions');
const admin      = require('firebase-admin');
const firebase   = require("firebase");
const app        = require('express')();
const bodyParser = require('body-parser');

firebase.initializeApp(functions.config().firebase);

const member     = require('./api/member');
const item       = require('./api/item')

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Working hard or hardly working!');
})

app.use('/member', member)

exports.api = functions.https.onRequest(app);