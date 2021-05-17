# StoryExpress
NodeJS-ExpressJS-SQL  
Reactjs-Redux

This project is built with the help of the above mentioned Technologies.

For searching a Particular movie it is taken care on frontend, rather than fetching data each time to search from tables.  
On Frontend Redux is responsible to maintain all the state changes and data handling.  

It has various functionalities(CRUD operations) and API for different operations.

Routes:-

GET - /movie/ - loads the page with all the data regarding the movies, Controller Function - fetchAll.   
POST - /movie/add - To add new movie to the favourite list of movies, Controller Function - addToFavourite.    
GET - /movie/fetchFav - To fetch all the favourite movies added by the client, Controller Function - fetchFavourite.  
POST - /movie/deleteFav - To delete a particular movie from the favourite list, Controller Function - deleteFav. 




Tables Used:-   
favourites : movieId,title,genres,tag,rating,ImdbId,mybool.  
links : movieId,ImdbId,tmdbId.  
movies : movieId,title,genres,mybool.  
ratings: userId,movieId,rating,timestamp.  
tags : userId,movieId,tag,timestamp.  

