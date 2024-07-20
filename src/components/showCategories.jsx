import React from 'react'
import Category from './category'
export default function ShowCategories(){
    const [animation, setAnimation] = React.useState([])

    const [action, setAction] = React.useState([])

    const [science, setScience] = React.useState([])

    const [crime, setCrime] = React.useState([])

    const [comedy, setComedy] = React.useState([])

    const [drama, setDrama] = React.useState([])
    
    React.useEffect(()=>{
        //fetchs shows data
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&without_genres=107%2C10759%2C99%2C80%2C35%2C10764%2C18%2C10751&with_watch_monetization_types=flatrate')
        .then(res => res.json())
        .then(data => setAnimation(data.results.map(movie=>movie))),
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759&without_genres=107%2C16%2C99%2C80%2C35%2C10764%2C18%2C10751&with_watch_monetization_types=flatrate')
        .then(res => res.json())
        .then(data => setAction(data.results.map(movie=>movie))),
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&without_genres=16%2C10759%2C99%2C80%2C35%2C10764%2C18%2C10751&include_null_first_air_dates=false&with_watch_monetization_types=flatrate')
        .then(res => res.json())
        .then(data => setScience(data.results.map(movie=>movie))),
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&without_genres=16%2C10759%2C99%2C10765%2C35%2C10764%2C18%2C10751&include_null_first_air_dates=false&with_watch_monetization_types=flatrate')
        .then(res => res.json())
        .then(data => setCrime(data.results.map(movie=>movie))),
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&without_genres=16%2C10759%2C99%2C10765%2C80%2C10764%2C18%2C10751&include_null_first_air_dates=false&with_watch_monetization_types=flatrate')
        .then(res => res.json())
        .then(data => setComedy(data.results.map(movie=>movie))),
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&without_genres=16%2C10759%2C99%2C10765%2C80%2C10764%2C35%2C10751&include_null_first_air_dates=false&with_watch_monetization_types=flatrate')
        .then(res => res.json())
        .then(data => setDrama(data.results.map(movie=>movie)))
   },[])

 const animationEl = animation.map(show =>       (
     <Category id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
 ))

 const actionEl = action.map(show =>(
    <Category id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
))

const scienceEl = science.map(show =>  (
    <Category id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
))

const crimeEl = crime.map(show =>(
    <Category id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
))
  
const comedyEl = comedy.map(show =>(
    <Category id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
))

const dramaEl = drama.map(show =>(
    <Category id={show.id}  key={show.id}  title={show.original_name} image={show.poster_path}/>
))
    return(
     <div className='categories-div'>
         <p className='trend-title'>Animations</p>
                <section className='trending-movies'>
            <div className='carousel'>
                <div className='inner-carousel'>
                {animationEl}
                </div>
                </div>
            </section>
            <p className='trend-title'>Action and Adventure</p>
                <section className='trending-movies'>
            <div className='carousel'>
                <div className='inner-carousel'>
                {actionEl}
                </div>
                </div>
            </section>
            <p className='trend-title'>Science Fiction</p>
                <section className='trending-movies'>
            <div className='carousel'>
                <div className='inner-carousel'>
                {scienceEl}
                </div>
                </div>
            </section>
            <p className='trend-title'>Crime</p>
                <section className='trending-movies'>
            <div className='carousel'>
                <div className='inner-carousel'>
                {crimeEl}
                </div>
                </div>
            </section>
            <p className='trend-title'>Comedy</p>
                <section className='trending-movies'>
            <div className='carousel'>
                <div className='inner-carousel'>
                {comedyEl}
                </div>
                </div>
            </section>
            <p className='trend-title'>Drama</p>
                <section className='trending-movies'>
            <div className='carousel'>
                <div className='inner-carousel'>
                {dramaEl}
                </div>
                </div>
            </section>
     </div>
    )
}