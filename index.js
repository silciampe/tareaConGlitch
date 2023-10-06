const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { log } = require('console');
dotenv.config();
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080;

/* app.get('/', (req, res, next) => {
    console.log('Ya lleyó el Middleware');

    res.send('Ya leyó el Middleware')

    next();

}) */

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req,res) =>{
    res.sendFile('index.html');
});

app.post('/', (req,res) => {

console.log(req.url);

const { usuario, email, password } = req.body


let datoUsuario = req.body.usuario;
let datoEmail = req.body.email;
let datoPassword = req.body.password;

console.log('=============================');

/* res.send(`Hemos recibido tus datos ${usuario} - ${email} - ${password}` )*/ 
res.redirect('/bienvenida.html')
})

app.get('/bienvenida', (req,res) =>{
    res.sendFile('bienvenida.html');
});

app.listen(PORT, (err) =>{
    if(err) console.log(err);
    console.log(`Server is running at http://localhost:${PORT}`);
})
