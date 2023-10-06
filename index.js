const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { log } = require('console');
dotenv.config();
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req,res) =>{
    const indexHtml = path.join(__dirname, 'public/index.html')
    res.sendFile(indexHtml);
});

app.get('/bienvenida', (req,res) =>{
    const bienvenida = path.join(__dirname, 'public/bienvenida.html')
    res.sendFile(bienvenida);
});

app.post('/', (req,res) => {

console.log(req.url);

const { usuario, email, password } = req.body


let datoUsuario = req.body.usuario;
let datoEmail = req.body.email;
let datoPassword = req.body.password;

console.log('=============================');


res.redirect('/bienvenida.html')
})



app.listen(PORT, (err) =>{
    if(err) console.log(err);
    console.log(`Server is running at http://localhost:${PORT}`);
})
