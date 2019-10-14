import React from 'react';
import Contact from './components/Contact';
import './App.css';


const Person1 = {
  name: "jonhy",
  avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7qBxMRfDS7F4MroOH7Ty_CMP-HjiCevqu1DQB048d-78yEqMJ",
  online : true,

}


const Person2 = {
  name: "Lena",
  avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLKWZTrFIWki4dXxGhE9bBzVY3sDHQcL_wvVfEQ5gH-AvZhGPg",
  online : true,

}

const Person3 = {
  name: "Etzio",
  avatar : "https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png",
  online : false,

}


function App(){
  return(
    <div className="App" >
      < Contact {...Person1}/>
      < Contact {...Person2}/>
      < Contact {...Person3}/>
    </div>
  )
}
export default App;
