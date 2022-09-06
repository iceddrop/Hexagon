import React from 'react'
import {Link} from 'react-router-dom'
export default function Search(props){
    let timer = setTimeout(function() { refreshPage(); }, 30000);
  function refreshPage() {
    window.location.reload(false);
  }
    return(
      <div  id="search-card"class="card  bg-dark me-3 text-white" >
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} className="card-img-top" alt="movie-image"/>
        <div class="card-body">
          <Link onClick={timer} className='show-search-btn' key={props.id} to={`/movieOverview/${props.id}`}>{props.name}</Link>
        </div>
     </div>    
    )
}