const express = require('express');
const router = express.Router();
const connection = require ('../database/connection')


//rotta pèer tutti i libri

router.get('/', (req, res)=>{

    const sql = `SELECT * FROM films`;

    connection.query(sql, (err, results)=>{

        console.log(results);
        

         res.json({
        films: 'all films'
    })

    })

   
})

module.exports = router;