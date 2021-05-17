import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {fetchData,searchBy,Reset,Add,fetchFav,deleteFav} from '../../actions/movie.js';
import {TextField,Button} from '@material-ui/core';
 

import './Customer.css';
const Customer = () => {

    const dispatch = useDispatch();
    
    const [filter,setFilter] = useState(false);
    const [fav,setFav] = useState(false);
    const [name,setName] = useState('');
    const [value,setValue] = useState('');
    
    
    var Movie_Details = useSelector((state) => filter ? state.Filtered : state.allSeller);
    
    
    const handleFavourite = (e,movie,index) => {
        e.preventDefault();
        //console.log(movie);
        dispatch(Add(movie,index,filter))
       
        
    }

    const handleReset = (e) => {
        e.preventDefault(); 
        dispatch(Reset());
        setFilter(true);
        setFav(false);
        
    }

    const handleDeleteFavourite = (e,movie,index) => {
        e.preventDefault();
        dispatch(deleteFav(movie,index));
    }
    
    useEffect(() => {
        dispatch(fetchData);
        
    },[]);

    


    const l = Movie_Details.length;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(searchBy(name,value));
        setFilter(true);
        setFav(false);
    }

   

    const showFav = (e) => {
        e.preventDefault();
        dispatch(fetchFav());
        setFav(true);
        setFilter(false);
    }

    
    
    return (

        <div className='main_container'>
            <form className='form_search' onSubmit={(e) => handleSubmit(e)}>
                    <h3>Search By: </h3>
                    
                            <TextField name="name" className="input" variant="outlined" label="Search By"  color="primary" onChange={(e) => setName(e.target.value)}/>
                            <TextField name="value" className="input" variant="outlined" label="Value"  color="primary" onChange={(e) => setValue(e.target.value)}/><br/>
                            <Button type='submit' className="input" variant="contained" color="primary">Submit</Button>
            </form>
        <div className= "button_with_function">
            <form className='form' onSubmit={(e) => handleReset(e)}>
                <Button type='submit' className="input" variant="contained" color="primary">Reset Back to All the Values</Button>
            </form>
            <form className='form' onSubmit={(e) => showFav(e)}>
                <Button type='submit' className="input" variant="contained" color="primary">Show Favourites List</Button>
            </form>
        </div>

               {l ? <div className='main_container'>
                    
                    
                    <div className='details'>
                     
                    {Movie_Details.map((movie,index) => {
                    
                        return (<div key={movie.id} className='each'>
                        <p>Title : {movie.title}</p>
                        <p>Rating : {movie.rating}</p>
                        <p>Tag : {movie.tag}</p>
                        <p>Genre : {movie.genres}</p>
                        <p>Imdb Id : {movie.ImdbId}</p>
                        {fav ?   

                            <form onSubmit={(e) => handleDeleteFavourite(e,movie,index)}>
                            <Button type='submit' className="input" variant="contained" color="primary">Click if you want to remove from favourite List</Button>
                            </form>

                            :

                            <form onSubmit={(e) => handleFavourite(e,movie,index)}>
                            <Button type='submit' className="input" variant="contained" color="primary">{movie.mybool ? "Added" : "Add to Favourite"}</Button>
                            </form>
                        }
                        
                        
                        </div>)
                    })}
                    </div>
                 </div>
                : 
                
                fav ? <h2>Favourite List Does not contain any movies right now</h2> : <h1>Loading</h1>  
                
                
                }  
                 
            
        </div>
    )
}

export default Customer
