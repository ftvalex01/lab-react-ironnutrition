import { useState } from 'react';
import {  Input } from 'antd';


function AddFoodForm(props){
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);


  const handleNameInput = e => setName(e.target.value);
 
  const handlesetImageInput = e => setImage(e.target.value);
 
  const handleCaloriesInput = e => setCalories(e.target.value);
 
  const handleServingsInput = e => setServings(e.target.value);

  const submitFormInfo = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood)
    
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);

};
  
  return(
      <div className="divform">
        <h4>Add a Food</h4>
  
  <form onSubmit={submitFormInfo}>
    <label>Name: </label>
    <Input 
        type="text" 
        name="name" 
        value={name}
        onChange={handleNameInput} 
    />
    

    <label>Image: </label>
    <Input 
        type="text" 
        name="image" 
        value={image}
        onChange={handlesetImageInput}
    />

    <label>Calories: </label>
    <Input 
        type="number" 
        name="calories" 
        value={calories}
        onChange={handleCaloriesInput} 
    />

    <label>Servings: </label>
    <Input 
        type="number" 
        name="servings" 
        value={servings} 
        onChange={handleServingsInput}
    />
    
    <button type="submit">Create Food</button>
  </form>

      </div>
  )
}




export default AddFoodForm