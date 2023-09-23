const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const routerBase = require('./routes/routes.js');
const app = express();

app.use('/hamburgueseria',routerBase)


const port = process.env.PORT255;
app.use(express.json())

const database = async ()=>{
    const url = process.env.DDBB255
    const db = new MongoClient(url)
    await db.connect();
    console.log("Db ONline:",url);

}
app.listen(port,async()=>{
    database();
    console.log("Servidor iniciado","en port:",port);

})
module.exports = database;