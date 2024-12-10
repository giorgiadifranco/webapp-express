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

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length == 0) return res.status(404).json({ err: 'movie not found' })
    
        //console.log(results);
    
        // get all reviews associated to the book
        connection.query(sql, [id], (err, results) => {
          if (err) return res.status(500).json({ err: err })
    
          //console.log('reviews', reviewsResults);
          const movie = {
            ...results[0],
           
          }
    
          res.json(movie)
    
        })
    
      })
});


module.exports = router;