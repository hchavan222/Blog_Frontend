import React from 'react'
import classes from "./styles.module.css"
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className = {classes.header} >
        <h1>BLOG NOW !!! </h1>

        <ul>
        <Link to={"/"}> <li>Home</li></Link>
            
           <Link to={"/add"} ><li>ADD</li></Link> 
        </ul>
    </div>
  )
}

export default Header