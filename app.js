const express = require('express');
const app = express ();
const path = require ('path');
const port = 3000


const pathPublico = path.join (__dirname,'./public');

app.use(express.static(pathPublico));

app.listen(process.env.PORT || port, () => console.log ('servidor en puerto 3000'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'./views/home.html')));

app.get('/login', (req,res)=> res.sendFile(path.resolve(__dirname + '/views/login.html')));

app.get('/register', (req, res)=> res.sendFile(path.resolve(__dirname + '/views/register.html')));



