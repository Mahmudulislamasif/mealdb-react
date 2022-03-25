import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css'
const Meal = ({meal,handleAddToCart}) => {
    const {strMeal,strMealThumb}=meal
    return (
        <div className='col-md-4 card-design'>
              <div>
                <img className='w-75' src={strMealThumb} alt=''/>
                <h5>{strMeal}</h5>
              </div>
            <div className='btn-parent'>
            <button className='btn-cart' onClick={()=>handleAddToCart(meal)}>
                   <p>Add to cart</p>
                   <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
               </button>    
            </div>        
        </div>
    );
};

export default Meal;