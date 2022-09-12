import React from 'react'
import background from '../assets/Untitled.jpeg'
import TrendingMovie from './trendingMovie'

export default function Home(){
      //state to store trending movies data
  const [trendingMoviesData, setTrendingMoviesData] = React.useState([])
  React.useEffect(()=>{
       //fetchs trending shows data
       fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=172f725b29bb276f5c4b6e294a988fc5')
       .then(res => res.json())
       .then(data => setTrendingMoviesData(data.results.map(movie=>movie)))
  },[])
  console.log(trendingMoviesData)

  function ion(id){
    setTrendingMoviesData(movie => movie.map(each =>(
      each.id === id ? {...each, adult : !each.adult} : {...each} 
    )
    ))
    console.log(id)
   }

 
  const trendingEl = trendingMoviesData.map(movie=>(
   <TrendingMovie adult={movie.adult} ion={() => ion(movie.id)} id={movie.id} country={movie.origin_country[0]} rating={movie.vote_average} dateReleased={movie.first_air_date} overview={movie.overview} title={movie.original_name} image={movie.poster_path}/>
  ))


  
 
    return(
        <>
    <section className='home-section' style={{ backgroundImage: `url(${background})` }}>
        <div className='home-overlay'>
        <div className='banner'>
            <h1 className="title">All Your Streaming Services In One Place</h1>
            <p className="paragraph-1">Your Streaming Shows and Tv Guide. Track, discover and find where to watch TV shows from Netflix, Amazon Prime, Hulu, Showtime and over 100 more services.</p>
            <div className='btn-div'>
                <a href="#" className="btn-1">HOW IT WORKS</a>
                <a href="#" className="btn-2">START A WATCHLIST</a>
            </div>
        </div>
        </div>
    </section>
    <p className='trend-title'>Trending</p>
        <section className='trending-movies'>
       <div className='carousel'>
        <div className='inner-carousel'>
        {trendingEl}
        </div>
        </div>
    </section>
  {/*  <section>
         <div className='d-flex'>
           <p>Drama</p>
           <p>Comedy</p>
           <p>Horror</p>
           <p>Romance</p>
           <p>Fantasy</p>
           <p>Animation</p>
           <p>Action</p>
           <p>Sci-Fi</p>
         </div>      
    </section>   */}
    </>
    )
}