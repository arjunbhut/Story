import {connection} from '../database.js';

export const fetchAll = async (req,res) => {

    connection.query("SELECT * FROM movies m  INNER JOIN ratings r ON m.movieId=r.movieId INNER JOIN links l ON m.movieId=l.movieId INNER JOIN tags t ON m.movieId=t.movieId"    
    ,function (err,result,fields){
        if(err) throw err;
        res.status(200).send(result);
    })

}

export const addToFavourite = async (req,res) => {
    
    const {movieId,title,rating,genres,tag,ImdbId} = req.body ;

    let s = `INSERT INTO favourites (movieId, title, rating, genres, tag, ImdbId) VALUES (${movieId},'${title}',${rating},'${genres}','${tag}','${ImdbId}')`; 

    
    connection.query(s,function (err,result) {
            if(err) throw err;
            console.log("Movie is added to the favourite");
    })


    let q = `UPDATE movies SET mybool = 1 WHERE movieId=${movieId}`;

    connection.query(q,function (err,result){
        if(err) throw err;
        console.log("Movie is updated");
    })


}
export const fetchFavourite = async (req,res) => {

    connection.query("select * from favourites", function(err,result){
        if(err) throw err;
        res.status(200).send(result);
    })

}

export const deleteFav = async (req,res) => {

    const {movieId} = req.body;

    connection.query(`delete from favourites where movieId=${movieId}`,function(err,result) {
        if (err) throw err;
        console.log("Fav is deleted");
    })

    connection.query(`update movies set mybool=0 where movieId=${movieId}`, function(err,result) {
        if(err) throw err;
        console.log("Movies table is also updated after deleting the fav");
    })

}