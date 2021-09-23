
import "antd/dist/antd.css";
import React from 'react'
import { Card, Col, Button } from "antd";



  function FoodBox(props){
   
    return(
      <Col>
       <Card
      title={props.dataFood.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={props.dataFood.image} height={60} alt="imagen"/>
      <p>Calories: {props.dataFood.calories}</p>
      <p>Servings: {props.dataFood.servings}</p>
      <p>
        <b>Total Calories: {props.dataFood.calories} * {props.dataFood.servings} </b> kcal
      </p>
      <Button onClick={() => props.clickToDelete(props.dataFood.name)} className="btn-delete" type="primary"> Delete </Button>
    </Card>
  </Col>
    )
  }

  /* const FoodBox = ({props})=>{
    return(
      <Col>
       <Card
      title={food.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={food.image} height={60} alt="imagen"/>
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories} * {food.servings} </b> kcal
      </p>
      <Button type="primary"> Delete </Button>
    </Card>
  </Col>
    )
  } */

export default FoodBox