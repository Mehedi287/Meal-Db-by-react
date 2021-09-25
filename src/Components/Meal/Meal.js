import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Meal.css'
const Meal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    console.log(meals.length);
    console.log(meals);

    return (
        < >
            <div className="meals-container">
                <div className="meal">

                    {
                        meals.map(meal => <Product meal={meal}  ></Product>)
                    }

                </div>
                <div className="meals-details">
                    <h3>meals details</h3>
                </div>
            </div>
        </>
    );
};

export default Meal;