const express = require("express")
const router = express.Router()

router.get('/login', (req, res)=>
{
    res.send('Hello Login')
})
module.exports = router