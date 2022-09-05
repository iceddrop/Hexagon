import React from 'react'
import {FaBackspace} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function TrendingMovie(props){
    const event = new Date(props.dateReleased);
    const date = event.toString().slice(0,16)
    
    return(
        <div  class="bug-card card trend-card  bg-dark mt-3 text-white" >
        {
          props.adult ?
          <>
          <p className="overview">{props.overview}</p>
          <div className='movie-info-div'>
          <p>Date released: {date}</p>
          <p>Ratings: {props.rating}</p>
          <p>Country: {props.country}</p>
          </div>
          <div className='btn-div-2'>
          <FaBackspace className="back-btn" onClick={props.ion}/>
          <Link key={props.id} className='show-btn' to={`/movieOverview/${props.id}`} >Watch</Link>
          </div>
          </>
          :
          <>
          <img src={`https://image.tmdb.org/t/p/w500${props.image}`} className="card-img-top trend-img" alt="movie-image"/>
          <div class="card-body">
            <button className='show-btn-1' onClick={props.ion}>{props.title}</button>
          </div>
          </>
        } 
       </div>
    )
}