// src/App.js
import "./App.css";
import "antd/dist/antd.css";
/* import FoodList from "./components/FoodList"; */
import FoodBox from "./components/FoodBox";
import foodData from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from 'react'
import Search from "./components/Search";


function App() {
  
  const [ foodsData, setFoodData ] = useState(foodData)
  const [foodFilter, setFoodFilter] = useState (foodData)
  const addFood = (newFood) =>{
    const foodNuevo = [...foodsData,newFood];
    setFoodData(foodNuevo)
  }
  const filterFoodList = (foodSearch) => {
    let searchArr = [...foodsData]
    let filteredFoods;
    
    if (foodSearch === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = searchArr.filter((food) => {
        return food.name.toLowerCase() === foodSearch.toLowerCase();
      });
    }
   
    setFoodFilter(filteredFoods);
  };
  const clickToDelete = (name) => {
    let copyFoods = [...foodsData]
    console.log(copyFoods)
    let updateList = copyFoods.filter(food => food.name !== name)
    console.log("updateListDelete : ", updateList)
    setFoodData(updateList)
    setFoodFilter(updateList)
  }


  return (
    <>
  <div className="App">
  <Search filterFoodList = {filterFoodList} />
    {foodFilter.map((foodElement)=>{
      return(
        <FoodBox dataFood = {foodElement} clickToDelete={clickToDelete}/>
    
      )
    })
    }
    <AddFoodForm addFood={addFood}/>
  </div>
  </>
  )
  
}
export default App;


