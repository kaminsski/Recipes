import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Edit from './edit';
import Navi from '../components/navi';



export default function Ana(props) {
    const { isOpen, setOpen } = props;
    const [query, setQuery] = useState("")

    const changeState = (event) => {
      setQuery(event.target.value)
    } 
   
    
  return (

    <>
    <Navi></Navi>
    <div className="searchbar">
      <input type="text" onChange={changeState} value={query} placeholder='Yemek ara' />
    </div>
    <div className="App">
    
      {isOpen.map((ymk) => {
        if (ymk.isim.toLowerCase().includes(query.toLowerCase())){

    return <div key={ymk.id} className='listItem'>
      <div><img src={ ymk.source} alt={ymk.isim} /></div>
     <div> Name: {ymk.isim}</div> 
     <div>Date: {ymk.tarih} </div> 
     <Link to={`/foods/${ymk.id}`}>
     <button>Read more</button> 
     </Link>
 </div>
  
}})}
    
    </div>
   
 
 
    </>
  )}




















