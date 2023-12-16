// require the library
const express = require("express");
const expresslayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const app = express();
const PORT = 10000;
const passport = require('passport');
const LocalStretegy = require('./config/passport_local_stretegy');
const googleStretegy = require('./config/passport-google-oauth2-stretegy');
const session = require('express-session');
const flash = require('connect-flash');
const customMiddleware = require('./config/middleware')

app.use(expresslayouts);
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.set("layout extractStyles", true);
app.set('layout extractScript', true);

// middelware to parse the form data
app.use(express.urlencoded({ extended: true }));

// sessions 
app.use(session({
    name: "nodejsauth",
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMiddleware.setflash);

// use express router
app.use('/', require('./routes'));

// listen to the port
app.listen(PORT, () => {
    console.log('The App is Listening on Port', PORT);
})