import React from 'react';
import Meal from '../Meal/Meal';
import './Product.css'

const Product = (props) => {
    const { strMealThumb, strMeal, strCategory, strInstructions } = props.meal
    // console.log(props.meal);
    return (
        <div className="product">
            <h3>{strMeal}</h3>
            <img onClick={() => props.handleClicked(props.meal)} src={strMealThumb} alt="" />
            <p className="">{strInstructions}</p>
        </div>
    );
};

export default Product;