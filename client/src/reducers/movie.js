
var filtered_state = [];

export const MovieReducer = (state = [], {type,payload}) =>{

     

      switch(type) {
        case "FETCH_ALL":
            state = [];
            filtered_state = [...state,...payload];
          return [...state,...payload];
        case "ADD":
          const sn = state[payload];
          sn.mybool = 1;
          return state.map((s,index) => (index === payload ? sn : s))
        case "FAV":
            state = [];
          return [...state,...payload];
        case "NOFAV":

          const id = payload.movie.movieId;
          console.log(id);
          var objIndex = filtered_state.findIndex((obj) => obj.movieId == id )
          filtered_state[objIndex].mybool = 0;
          //console.log(m);
          
          console.log(filtered_state);

          return state.filter((s,index) => index !== payload.index)
       

        default:
          return state;

      }

}

export const Filtered = (state = [], {type,payload}) =>{

  switch(type) {

    case "SEARCH_BY":
      const n = payload.name;
     
      const v = payload.value;
      
       state = filtered_state.filter(function (el){
        
          if(n=="Rating")
          return el.rating == v;
          else if(n== "Title")
          return el.title == v;
          else if(n== "Genre")
          return el.genres == v;
          else if(n == "Tag")
          return el.tag == v;
          else if(n == "ImdbId")
          return el.ImdbId == v;
        
      })
      // console.log(state);
      // console.log(filtered_state);
      return state;
    
    case "ADD_FILTER":
        const sn = state[payload];
        sn.mybool = 1;
        console.log(sn);
        return state.map((s,index) => (index === payload ? sn : s))
    
    case "RESET":
      console.log(filtered_state);
      state = [];
      return [...state,...filtered_state];  

    
    default:
      return state;

  }
  

}