import React, {useState} from 'react'
import searchIcon from '../../assets/icons/search.png'
import {NavLink} from 'react-router-dom'
import './style.css'
function NavBar() {
    const [search, setSearch] =useState(false)

    const openSearch=()=>{
       setSearch(true)
    }

    const submitSearch = (e) =>{
        e.preventDefault()
        alert("typed ...")
    }
    const searchClass = search? "searchInput active":"searchInput"
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About Us</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            <div className="search">
            <form className="searchForm" onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search post" />
                <img onClick={openSearch} src={searchIcon} alt="Search"/>
            </form>
            </div>
        </div>
    )
}

export default NavBar
