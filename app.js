const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express(urlencoded({ extended: true })));
app.use(express());

app.set('view engine', 'ejs')
app.get('/create', (req, res) => {
    res.render('create')
})
app.get('/', (req, res) => {
    res.render('home')
})


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        app.listen(4000, () => {
            console.log('Server Running on port 4000 ');
        })
    })
    .catch(e => {
        console.log(e);
    })