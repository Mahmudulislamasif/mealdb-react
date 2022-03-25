import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Navbar from '../Navbar/Navbar';

const Meals = () => {
    const [meals,setMeals]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    const handleAddToCart=(meal)=>
    {
      const newCart=[...cart,meal]
      setCart(newCart)
    }
   
    return (
      <div className='container'>
          <div className='row g-4'>
          {
              meals.map(meal=><Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
          }
        </div>
         <div>
           <Navbar cart={cart.length}></Navbar>
         </div>
      </div>
    );
};

export default Meals;

