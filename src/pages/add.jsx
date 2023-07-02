import React from 'react'
import Navi from '../components/navi'

export default function Add(props) {

    const { isOpen, setOpen } = props;
    let uzunluk =isOpen.length +1
const save_food = () => {
    let image = document.getElementById("img_add")
    let id = uzunluk
    uzunluk +=1
    let isim = document.getElementById("name_add").value
    let source = "/images/no.svg.webp"
    let tarif = document.getElementById("recipe").value
    let tarih = new Date().toLocaleDateString();

    let obje = {id, isim, source, tarif, tarih}
    let data = [...isOpen]
    data.push(obje)
    localStorage.setItem("foods", JSON.stringify(data))
    setOpen(data)
   
}

  return (
    <>
    <Navi></Navi>
    <div className='add'>
    <div className='addContainer'>
      <label htmlFor="resim">Image Upload:</label> <br />
      <input type="file" id='img_add' accept='image/*' /> <br />
      <label htmlFor="isim">Name:</label> <br />
      <input type="text" id='name_add'/> <br />
      <label htmlFor="recipe">Recipe:</label> <br />
      <textarea name="recipe" id="recipe" cols="30" rows="10"></textarea> <br />
    <button onClick={save_food}>ADD</button>
    </div>
    </div>
    </>
  )
}
