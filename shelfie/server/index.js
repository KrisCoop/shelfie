const express = require('express')
require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive');
const axios = require('axios');


const app = express();

const controller = require('./controller');


app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        console.log(`db is connected`)
        app.set('db', dbInstance)
    })
    .catch((err)=>{
        console.log(`holy shnikeys your stuff don't work ${err}`)
    })

// end points go here guy.
app.get('/api/inventory', controller.get);

const port = process.env.PORT || 8060;

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})