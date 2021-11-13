const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

// console.log( exphbs );

const app = express();
const port = process.env.PORT || '4400';

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen( port, () => { console.log('Server is Running') } );