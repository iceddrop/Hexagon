import React from 'react'
export default function Search(props){

    return(
      <div  id="search-card"class="card  bg-dark me-3 text-white" >
        <img src={props.image} className="card-img-top" alt="movie-image"/>
        <div class="card-body">
          <button  onClick={props.displayOverview}>{props.name}</button>
        </div>
     </div>    
    )
}