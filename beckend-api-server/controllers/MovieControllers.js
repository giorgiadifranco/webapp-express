const connection = require('../database/connection');

function index(req, res) {

    const sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results)=>{

        console.log(results);
        

         res.json({
            movies: results,
            count: results.length
         })
    })

   
}


//funzione per lo show

function show (req, res){

   
    
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
    


}

module.exports = {
    index,
    show
}