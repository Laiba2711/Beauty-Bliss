import React from 'react'
import { NavLink } from 'react-router-dom'
export default function home() {
  return (
    <div className='Navlinks'>
    <NavLink to="/" exact activeClassName="current"></NavLink>
    <NavLink to="/" exact activeClassName="current"></NavLink>
    <NavLink to="/about" exact activeClassName="current"></NavLink>
    <NavLink to="/services"  activeClassName="current"></NavLink>
    <NavLink to="/contact"  activeClassName="current"></NavLink>
    <NavLink to="/profile"  activeClassName="current"></NavLink>
     </div>
  )
}


