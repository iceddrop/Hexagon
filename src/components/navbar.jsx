import React from 'react'
import { FaBars } from 'react-icons/fa'
import Search from './search'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Navbar() {
  const navigate = useNavigate();
  //store search input field data here
  const [searchInput, setSearchInput] = React.useState('')
  //store data gotten from API here
  const [searchData, setSearchData] = React.useState([])
  //state to display search result text
  const [displaySearchText, setDisplaySearchText] = React.useState(false)
  //state to change the navbar background
  const [navbar, setNavbar] = React.useState(false)




  //tracks the search field input data 
  function handleChange(event) {
    setSearchInput(event.target.value)
  }
  
  // fetchs the data from the movie API and stores it in inside searchData state
  function search(e) {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=172f725b29bb276f5c4b6e294a988fc5&language=en-US&page=1&query=${searchInput}&include_adult=false`)
      .then(res => res.json())
      .then(data => setSearchData(data.results.map(movie => movie))),
      setDisplaySearchText(val => !val),
      e.preventDefault();
  }
      
  //passing search result data to search component as props
  const moveEl = searchData.map(movie => (
    <Search id={movie.id} name={movie.name} image={movie.poster_path} summary={movie.overview} />
  )
  )

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, handle redirect or UI update
        navigate("/signin")

      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <>
       <nav className="bg-dark navbar navbar-expand-md fixed-top navbar-light" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Hexagon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          <div className="collapse navbar-collapse navbar-drop" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='./home' className="nav-link" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to='./showCategories' className="nav-link" href="#">Tv Shows</Link>
              </li>
              <li className="nav-item">
                <Link to='./' className="nav-link " >Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to='./signin' className="nav-link " >Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link " >My profile</Link>
              </li>
              <li className="nav-item">
                <p className="nav-link " onClick={handleLogout}>Logout</p>
              </li>
            </ul>

          </div>
          <form className="d-flex">
            <input className="form-control form me-2" onChange={handleChange} value={searchInput} type="search" placeholder="What do you want to watch" aria-label="Search" />
            <button className="search-btn" onClick={search} type="submit">Search</button>
          </form>
        </div>

      </nav>
      <section className='search-body'>
        {displaySearchText ? <p className='result-text'>Your search results</p> : ''}
        {/* swiper library to display search result in an horizontal scroll*/}
        <div className='carousel'>
          <div className='inner-carousel'>
            {moveEl}
          </div>
        </div>
      </section>
    </>
  )
}

