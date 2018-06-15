const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});


app.listen(3000);