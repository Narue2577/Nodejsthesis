//step 1 install any in need
var express = require('express');
var app = express();
const morgan = require('morgan')
const bodyparser = require("body-parser")
const cors = require('cors')
const product = require('./routers/product')
const auth = require('./routers/auth')
const { readdirSync } = require("fs")  
//step 4 middleware
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cors())
app.use('/api', product)
app.use('/api', auth)
readdirSync('./routers')
.map((c) => app.use('/api', require('./routers/'+c)))
//step 2 Start Server
app.listen(5000,()=> 
    console.log('Server is Running on port 5000'));


//step 3 routers
/*app.get('/', (req, res) => {
    //code
    res.send('Hello Server')
})
app.post('/api', (req, res) => {
    const {name, price} = req.body;

    console.log(price);
    res.send(req.body)
})*/
