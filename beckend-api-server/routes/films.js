const express = require('express');
const router = express.Router();
const connection = require ('../database/connection')


//rotta per tutti i libri

router.get('/', (req, res)=>{

    const sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results)=>{

        console.log(results);
        

         res.json({
            movies: results,
            count: results.length
         })
    })

   
})

router.get('/:id', (req, res) =>{
    
    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`;

    connection.query(sql, [id], (req, results) =>{
        if (err) { 
            return res.status(500).json({err: err})
        }
            console.log(results);

            res.json({
            movies: `returning the book with an id of ${id}`
            
    });
});

})

module.exports = router;