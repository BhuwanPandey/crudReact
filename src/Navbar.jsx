import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbarcontainer">
        <div className="subcontainer">
            <NavLink exact="true" activeclass="active" to="" className='nav'>Home</NavLink>
            <NavLink exact="true" activeclass="active" to="/create" className='nav'>Create</NavLink>
            <NavLink exact="true" activeclass="active" to="/api" className='nav'>Api</NavLink>
            
        </div>
    </div>
  )
}

export default Navbar