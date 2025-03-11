const express = require("express")
const router = express.Router()
const {create, list} = require('../controllers/product')

router.get('/product',list);
router.post('/product',create);
router.get('/product/:productId', (req, res)=>{
    const { propuctId } = req.params;
    res.send('Hello GE ID Product')
})
router.post('/product',(req, res) =>{
    res.send('Hello POST');
})
router.put('/product/:productId', (req, res) =>{
    const { propuctId } = req.params;
    console.log(propuctId);
    res.send("Hello PUT");
})
router.delete('/product/:productId', (req, res) =>{
    const { propuctId } = req.params;
    console.log(propuctId);
    res.send("Hello DELETE");
})
module.exports = router

// localhost:5000/api/host