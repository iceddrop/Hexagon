import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieOverview(){
    const [moviedetails, setMovieDetails] = React.useState({})
    const [genresArr,setGenresArr] = React.useState([])
    console.log(moviedetails.genres)
    const {id} = useParams()
   console.log(moviedetails)
    React.useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=172f725b29bb276f5c4b6e294a988fc5`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
    }
    //converting the date-released date gotton from the API to string
    const event = new Date(moviedetails.first_air_date);
    const dateReleased = event.toString().slice(0,16)

    const genreEl = moviedetails.genres?.map(genre=>{
        return(
            <li>{genre.name}</li>
        )
    })

    const writerEl = moviedetails.created_by?.map(writer=>{
        return(
            <li>{writer.name}</li>
        )
    })
    return(
        <div className='overview-1' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${moviedetails.backdrop_path})` }}>
           <div className='overlay'>
            <div className='container show-details-div'>
              <div className='row'>
                 <div className='col-md-6 col-lg-6 col-xl-6'>
                    <img className='show-poster' src={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`} alt='tv-show-poster'/>
                 </div> 
                 <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='mini-show-details-div'>
                        <h5 className='show-title'>{moviedetails.name}</h5>
                        <div className=' micro-show-details-div'>
                           <h6 className='date-released'>Date Released: {dateReleased}</h6>
                           <h6 className='show-ratings'>Ratings: {moviedetails.vote_average}</h6>
                        </div>
                    <p className='show-desc'>{moviedetails.overview}</p>
                    <a href={`${moviedetails.homepage}`} className='watchShow'>Watch</a>
                    </div>
                </div>
              </div>  
            </div>
            <div className='credits'>
                <div className='genres'>  
                 <ul className='genre-list'>
                 <li className='credit-title'>Genre</li>
                 {genreEl}
                 </ul>
                </div>
                <div className='writers'>
                    <ul className='writers-list'>
                    <li className='credit-title'>Writers</li>
                      {writerEl}
                    </ul>    
                </div>
            </div>
            </div>
        </div>
    )
}