import react from 'react'
import {Link} from 'react-router-dom'
export default function PopularShow(props){
    const event = new Date(props.dateReleased);
    const date = event.toString().slice(0,16)
    return(
        <div  class="card trend-card  bg-dark mt-3 text-white" >
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} className="card-img-top trend-img" alt="movie-image"/>
        <div class="card-body">
          <Link key={props.id}  className='show-btn-1' to={`/movieOverview/${props.id}`}>{props.title}</Link>
        </div>
     </div>
    )
}