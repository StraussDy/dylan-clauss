const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000);