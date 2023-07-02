import React from 'react'
import { useParams } from 'react-router-dom'
import Navi from '../components/navi'


export default function Foods(props) {

    const { isOpen, setOpen } = props;
    const { id } = useParams()

    const obje = isOpen.find(idx => idx.id == id )
 

  return (
    <>
    <Navi></Navi>
    <h2 className='detail'>Detail</h2>
    <hr />
    <div className='contentContainer'>
      
      <img src={obje.source} alt={obje.isim} />
      <div className='contentText'>
      <div><span> Name: </span> {obje.isim}</div> 
     <div><span>Date: </span> {obje.tarih} </div> 
     <div><span>Recipe:</span>  {obje.tarif} </div> 
     </div>

    </div>
    </>
  )
}
