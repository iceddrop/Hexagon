import React from 'react'
import background from '../assets/Untitled.jpeg'
import TrendingMovie from './trendingShow'
import PopularShow from './popularShow'
export default function Home(){
      //state to store trending movies data
  const [trendingMoviesData, setTrendingMoviesData] = React.useState([])

  const [popularMoviesData, setPopularMoviesData] = React.useState([])

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
   <TrendingMovie  id={movie.id} key={movie.id}   title={movie.original_name} image={movie.poster_path}/>
  ))


  
  React.useEffect(()=>{
       //fetchs trending shows data
       fetch('https://api.themoviedb.org/3/tv/popular?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&page=1')
       .then(res => res.json())
       .then(data => setPopularMoviesData(data.results.map(movie=>movie)))
  },[])
console.log(popularMoviesData)

const popularEl = popularMoviesData.map(show =>(
    <PopularShow id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
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
    <p className='trend-title'>Trending Now</p>
        <section className='trending-movies'>
       <div className='carousel'>
        <div className='inner-carousel'>
        {trendingEl}
        </div>
        </div>
    </section>
    <p className='trend-title'>Popular Shows</p>
        <section className='trending-movies'>
       <div className='carousel'>
        <div className='inner-carousel'>
        {popularEl}
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