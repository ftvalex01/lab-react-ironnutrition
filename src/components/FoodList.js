//import { useState } from 'react';
import React from 'react'
import "antd/dist/antd.css";




//const [moviesData, setMoviesData] = useState(moviesDataJSON)
function FoodList(props) {
//const [ food, setFood ] = useState(foodsData)
  

    return (
      props.dataFood.map((food)=>(
        <div>
          <p> {food.name} </p>
          <img src={food.image} width={100} alt="imagen" />
        </div>
      ))
    )//cierre del return
  }//cierre del foodlist
  

  export default FoodList;