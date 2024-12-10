const express = require('express');
const router = express.Router();


//rotta pèer tutti i libri

router.get('/', (req, res)=>{

    res.json({
        films: 'all films'
    })
})

module.exports = router;