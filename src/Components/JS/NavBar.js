import React, { useState } from 'react'
import '../CSS/NavBar.css'
import { Link } from "react-router-dom";
import { OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookMarks from './BookMarks';


const NavBar = () => {
  const [show, setShow] = useState();

  const showBookMark = () =>{
    setShow(!show);
  }


  return (
    <>
      <div className='NavContainer'>
        <div className='logo'>
          <Link className="link" to="/">FoodMood</Link>
        </div>
        <ul className='navMenu'>
          <li className='menu-items'>
            <Link className="link" to="/">Home</Link>
          </li>
          <li className='menu-items'>
            <Link className="link" to="/about">About</Link>
          </li>
          <li className='menu-items'>
            <Link className="link" to="/recipes">Recipes</Link>
          </li>
          <li className='menu-items'>
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
        <div className='searchBar'>
          <OutlinedInput id="outlined-basic" variant="outlined" size="small" />
          <IconButton aria-label="bookmark" onClick={showBookMark}>
            <BookmarksIcon />
          </IconButton>

        </div>

      </div>
      <BookMarks />

    </>
  )
}

export default NavBar


