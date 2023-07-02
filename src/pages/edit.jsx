import React, { useState } from 'react'
import Navi from '../components/navi';
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Edit(props) {
    const { isOpen, setOpen } = props;
   
    const yemekSil = (ymkId) => {
      const onay = window.confirm(`Silmek istediginden emin misin?`)

      if (onay){
          const updateState = isOpen.filter(veri => veri.id !== ymkId)
          localStorage.setItem("foods", JSON.stringify(updateState))
           setOpen(updateState)
        
        
      } 
  }
  
  const yemekEdit = (ymk) => {
   
    const isim = window.prompt(`Isim`)
   ymk.isim = isim
   ymk.tarih = new Date().toLocaleDateString();
   const tarif = window.prompt(`Tarif:`)
   ymk.tarif = tarif
   ymk.source = "/images/no.svg.webp"
   localStorage.setItem("foods", JSON.stringify([...isOpen]))
   setOpen([...isOpen])
      
        
    }
    
  return (
    <>
    
    <Navi/>  
    
    <div className="App">
    
      {isOpen.map((ymk) => {
        

    return <div key={ymk.id} className='listItem'>

      <div className='image'><img src={ ymk.source} alt={ymk.isim} />
      <div className="abs" onClick={()=>{return yemekSil(ymk.id)}}><FaTrash size={50} color='red'></FaTrash></div>
      <div className="absy" onClick={()=>{return yemekEdit(ymk)}}><FaEdit size={50} color='blue'></FaEdit></div>
      </div>
     <div> Name: {ymk.isim}</div> 
     <div>Date: {ymk.tarih} </div>
     
     <div className="buttonContainer">
     
   
     </div>
     
 </div>
  
})}
    
    </div>

    </>
  );
}
