require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//middleware
const sampleMiddleware = require('./middleware/sample');

app.use(sampleMiddleware);

//routes
const mainRoutes = require('./routes/mainRoutes');

app.use(mainRoutes);

app.listen((process.env.PORT || 3000), ()=>{
    console.log('http://localhost:' + (process.env.PORT||3000));
});