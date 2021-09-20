const express = require('express');
const app = express ();
const path = require ('path')


const pathPublico = path.join (__dirname,'./public');

app.use(express.static(pathPublico));

app.listen(3000, () => console.log('server up at: http://localhost:3000/'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'./views/home.html')));

app.get('/login', (req,res)=> res.sendFile(path.resolve(__dirname + '/views/login.html')));

app.get('/register', (req, res)=> res.sendFile(path.resolve(__dirname + '/views/register.html')));



