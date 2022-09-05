import React from 'react'
import {FaBars} from 'react-icons/fa'
import Search from './search'
import {motion} from 'framer-motion'
import {useRef } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){

     //store search input field data here
  const [searchInput, setSearchInput] =  React.useState('')
  //store data gotten from API here
  const [searchData, setSearchData] = React.useState([])
  //state to display search result text
  const [displaySearchText, setDisplaySearchText] = React.useState(false)
  //state to change the navbar background
  const [navbar, setNavbar] = React.useState(false)
  console.log(searchData)



//tracks the search field input data 
  function handleChange(event){
     setSearchInput(event.target.value)

  }
  console.log(searchInput)
// fetchs the data from the movie API and stores it in inside searchData state
  function search(e){
    fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then(res => res.json())
    .then(data => setSearchData(data.map(movie=>movie.show))),
    setDisplaySearchText(val=>!val)
    e.preventDefault();
  }

console.log(searchData)



//passing search result data to search component as props
    const moveEl = searchData.map(movie =>(
      <Search id={movie.id}  link={movie._links.self.href} name={movie.name} image={movie.image.original} summary={movie.summary}/>
    )
    )

  //state to store serach result width
  const [width, setWidth] = React.useState(0)
  const carousel = useRef()

  React.useEffect(() =>{
    // calculates the min and max width for horizontal scroll.
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 350)
  },[])

    return(
        <>
        <nav className= "bg-dark navbar navbar-expand-md fixed-top navbar-light" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hexagon</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars/>
          </button>
          <div class="collapse navbar-collapse navbar-drop" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='./' className= "nav-link" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <a className= "nav-link" href="#">Tv Shows</a>
              </li>
              <li class="nav-item">
                <Link to='./signup' className="nav-link " href="#">Sign Up</Link>
              </li>
              <li class="nav-item">
                <Link to='./error' className="nav-link " >Sign In</Link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control form me-2" onChange={handleChange} value={searchInput} type="search" placeholder="What do you want to watch" aria-label="Search"/>
              <button class="search-btn" onClick={search} type="submit">Search</button>
            </form>
          </div>
        </div>
   </nav>
                <section className='search-body'>
                {displaySearchText ? <p className='result-text'>Your search results</p> : ''}
                 {/* swiper library to display search result in an horizontal scroll*/}
                  <motion.div ref={carousel} className='carousel'>
                        <motion.div drag='x' dragConstraints={{right:0, left:-width}} className='inner-carousel'>
                            {moveEl}
                        </motion.div>
                      </motion.div>
               </section>
               </>
    )
}