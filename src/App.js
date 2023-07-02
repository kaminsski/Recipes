import './App.css';

import { Route,Routes } from 'react-router-dom';
import Ana from './pages/ana';


import { useState } from 'react';
import Edit from './pages/edit';
import Add from './pages/add';
import Foods from './pages/foods';



const database = 
[
    { id: 1, isim: "Tavuklu Buritto", source: "/images/1.jpeg", tarif: "Davet sofralarında ara sıcak olarak sunabileceğiniz, iş yerinde öğle yemeği olarak yanınızda götürebileceğiniz ya da öğrenci evlerinde besleyici ve doyurucu bir öğün olarak yapabileceğiniz tavuklu burrito oldukça lezzetlidir. Meksika’lı tarım işçileri, yanlarında taşıdıkları öğle yemeğini muhafaza etmek ve hızlı şekilde yiyebilmek için tortillaya sararlar. Meksika yerlilerinin burrito dedikleri bu yemek türü, birkaç malzemenin karışımı ile elde edilir. İşçilerin kısıtlı olan öğle yemeği saatinde burritoyu pratik şekilde yediğini ve lezzetli olduğunu gözlemleyen Amerikalı bir girişimci, harcını zenginleştirerek fast-food restoranlarda satışa sunar. Deneyenler tarafından çok sevilen burrito, kısa sürede geniş bir kitleye yayılır. Orjinalinde et kavurma, fasulye ve pilav kullanılan tavuklu burrito tarifi oldukça kolaydır. Harç malzemesi lavaşa sarılarak dürüm haline getirilir. Hazırlanması kısa sürede tamamlanan tavuklu burrito yapılışı için aşağıdaki tarifi kullanabileceğiniz gibi, kendinize göre farklı malzemelerle de deneyebilirsiniz. ", tarih: "27/10/2018" },
    { id: 2, isim: "Ürgüp Köftesi", source: "/images/2.jpeg", tarif: "Nevşehir'in en gözde tariflerinden biri olan Ürgüp köftesi, dana eti ile hazırlanır. Yapımında irmik, patates ve soğan kullanılmaktadır. Hazırlaması yaklaşık 30 dakika olan bu köfte, ana yemek olarak sunulabilir. Malzemeleriniz hazırsa, Ürgüp köftesi tarifi için detaylara geçebiliriz.", tarih: "24/12/2019" },
    { id: 3, isim: "Karnabahar Kızartması", source: "/images/3.jpeg", tarif: "Ana vatanı Doğu Akdeniz olarak bilinen karnabahar, kanser riskini düşüren besinler arasında yer alır. Metabolizmayı hızlandırdığı için, özellikle kilo vermede etkilidir. Genellikle salata, çorba ve ana yemeklerin içerisinde kullanılır. İçeriğinde bulunan C ve K vitaminleri sayesinde gelişimi destekler. Bu nedenle çocukların ve hamilelerin ayda bir kez tüketmesi önerilir. Karnabaharın faydalarını öğrendiğimize göre malzemeler hazırsa, kolay karnabahar kızartması nasıl yapılır birlikte görelim.", tarih: "05/02/2010" },
    { id: 4, isim: "İmam Bayıldı", source: "/images/4.jpeg", tarif: "Türk mutfağının eşsiz bir lezzeti olan imam bayıldı, zeytinyağlı bir yemektir. Ana malzemesi patlıcandır. Ek olarak soğan, sarımsak, biberle zenginleştirilir. Malzemeleriniz hazırsa, kolay imam bayıldı nasıl yapılır, imam bayıldı kaç dakika da pişer sorularına cevap bulmak için tarife başlayabiliriz.", tarih: "11/11/2017" },
    { id: 5, isim: "Fırında Bebek Patates", source: "/images/5.jpeg", tarif: "Normal patatese göre daha küçük boyutlarda olan bebek patates, yemeklerin yanında sunulmasıyla bilinir. Baharatlarla harmanlanan bebek patates, A, C, E ve K vitamini bakımından zengindir. Özellikle et ve balıkların yanında sunulan bebek patates, isteğe göre haşlama veya fırınlama usulüyle pişirilir. Malzemeler hazırsa, fırınlanmış bebek patates yapımı için detaylara geçebiliriz.", tarih: "23/01/2021" },
    { id: 6, isim: "Fırında Karışık Sebze", source: "/images/6.jpeg", tarif: "Vitamin bakımından çok zengin olan sebze yemekleri, fırında pişirildiğinde besin değerlerini kaybetmiyor. Yüksek oranda lif içeren sebze yemeğine, diyet ve sporcu listelerinin ilk sıralarında yer verilir. Kalp sağlığına dost olan bu besinler, uzun süre tokluk hissi sağlar. Zengin potasyum içerikleri sayesinde, kemik erimesi riski en aza düşer. İçerisine ekleyeceğiniz malzemeler ile lezzetine lezzet katabilir yanında yoğurtla tüketebilirsiniz. Malzemeleriniz hazırsa, kısa sürede hazırlanan fırında karışık sebze tarifine geçebiliriz.", tarih: "24/10/2023" },
    { id: 7, isim: "Fried Rice", source: "/images/7.jpeg", tarif: "Kızarmış pilav olarak da bilinen fried rice, bir tavada karıştırılarak kızartılan bir yemektir. Yapımında sebze, deniz ürünleri veya tavuk eti kullanılır. İsteğe göre baharat ve soslarla zenginleştirilir. Ana vatanı Çin olarak bilinen fried rice, hem ana yemek olarak, hem de başka bir yemeğin yanına sunulabilir. Fried rice nasıl yapılır diye merak edenler için, tarif detaylarına geçebiliriz.", tarih: "01/12/2020" },
    { id: 8, isim: "Fesleğen Soslu Makarna", source: "/images/8.jpeg", tarif: "İtalyan mutfağından dünyaya yayılan spagetti, hem ekonomik, hem de lezzetli yemeklerin başında gelir. Farklı soslarla zenginleştirilen makarna, çoğu zaman ana yemek olarak sofralardaki yerini alır. Klasik makarna tariflerinden sıkılanlar için, yalnızca 5 malzemeyle hazırlanan fesleğen soslu makarna tarifini sizlere sunuyoruz. Yemeğin lezzetini arttırmak için rendelenmiş parmesan peyniri veya kaşar peynir ilave edebilirsiniz.", tarih: "08/08/2014" },
]



if (localStorage.getItem("foods") ) {
  
}

if(!(localStorage.getItem("foods"))){
localStorage.setItem("foods", JSON.stringify(database))

}



const foods = JSON.parse(localStorage.getItem("foods"))







function App() {
    const [ yemek, setYemek] = useState(foods)

 
  return (

<>
  
  <Routes>
  <Route path='/' element= {<Ana isOpen={yemek} setOpen={setYemek}></Ana>}>  </Route>
  <Route path='/edit' element= {<Edit isOpen={yemek} setOpen={setYemek}></Edit>}>  </Route>
  <Route path='/add' element= {<Add isOpen={yemek} setOpen={setYemek}></Add>}>  </Route>
  <Route path='/foods/:id' element= {<Foods isOpen={yemek} setOpen={setYemek}></Foods>}>  </Route>

  </Routes>
  

  </>


  );
}

export default App;
