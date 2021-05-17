import * as api from '../api/index.js';


export const fetchData = async (dispatch) => {
    try {
        const {data} = await api.fetchAllMovie();
        dispatch({type: "FETCH_ALL", payload: data});
    }
    catch (err) {
        console.log(err);
    }
}

export const searchBy = (name,value) => async (dispatch) => {
    try {

            const data = {
                name: name,
                value : value
            }

            dispatch({type: 'SEARCH_BY', payload: data })
    }
    catch (err) {
        console.log(err);
    }
}

export const Reset = () => async (dispatch) => {
    try {
            dispatch({type: 'RESET'})
    }
    catch (err) {
        console.log(err);
    }
}

export const Add = (data,index,fil) => async (dispatch) => {
    try {
        console.log(fil);
        api.addToFavourite(data);
        if(fil)
        {
            dispatch({type: "ADD_FILTER", payload: index})
        }
        else
            dispatch({type: 'ADD', payload: index})
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchFav = () => async (dispatch) => {
    try{
        const {data} = await api.fetchFav();
        dispatch({type: "FAV", payload: data})
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteFav = (movie,index) => async (dispatch) => {
    try {
        api.deleteFav(movie);
        dispatch({type: "NOFAV", payload: {index,movie}})
    }
    catch(err) {
        console.log(err);
    }
}

