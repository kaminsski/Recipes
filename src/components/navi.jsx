import React from 'react'
import { Link } from 'react-router-dom'

export default function Navi() {
  return (
    <div className='navi'>
      <ul>
        <li>
         <Link to="/">Homepage</Link> 
        </li>
        
        <li>
          <Link to="/edit">Edit Content</Link> 
        </li>
        
        <li>
          <Link to="/add">Add Content</Link> 
        </li>
      
      </ul>
    </div>
  )
}
