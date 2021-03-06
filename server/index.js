require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const {login, register, logout, userSession} = require('./Controller/authCtrl')
const {getAllMemes} = require('./Controller/memeCtrl')

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB HAS CONNECTED')
}).catch(err => console.log(err))

app.use(session({
    secret: SESSION_SECRET,
    resave:false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

// Auth Endpoints
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/userSession', userSession);
app.get('/auth/logout', logout)
// MEMES
app.get('/api/get_memes', getAllMemes)


app.listen(SERVER_PORT, () => console.log(`Say hello to my little friend ${SERVER_PORT}`))