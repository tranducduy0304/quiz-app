const express = require('express');
const route = require("./server/routes");
const cookieParser = require('cookie-parser');
const {default: mongoose} = require('mongoose');

require("dotenv").config();
const app = express()
const PORT = 1111;

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/', function (req, res) {
    res.send('Hellosasdfdf World')
})

route(app);

app.listen(PORT, ()=>{
    console.log(`App listening at https://localhost:${PORT}`);
})