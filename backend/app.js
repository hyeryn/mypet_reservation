const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade');



const profile = require('./profile');
app.use('/profile', profile);

app.listen(3000, () => {
    console.log('server connected');
});


const auth = require('./auth');
app.use('/auth', auth);

app.listen(3000, () => {
    console.log('server connected');
});


const main = require('./main');
app.use('/main', main);

app.listen(3000, () => {
    console.log('server connected');
});


const diary = require('./diary');
app.use('/diary', diary);

app.listen(3000, () => {
    console.log('server connected');
});