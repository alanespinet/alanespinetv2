const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

// console.log( exphbs );

const app = express();
const port = process.env.PORT || '4400';

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.get('/', (req, res) => { 
    const templateInfo = {};

    const menu = [
        { label: "Home", url: '/' },
        { label: "Portfolio", url: '/#portfolio' }
    ];

    templateInfo['menu'] = menu;

    res.render('home', { 
        data: templateInfo,
        title: 'Full Stack Developer'
    }); 
})

app.listen( port, () => { console.log('Server is Running') } );