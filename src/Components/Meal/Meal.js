import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MealDetails from '../MealDetails/MealDetails';
import Product from '../Product/Product';
import './Meal.css'
const Meal = () => {
    // useState for serch result 
    const [text, setText] = useState('a');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [text]);


    // usesate for show details in right side 
    const [product, setProduct] = useState([])
    const handleClicked = (product) => {
        console.log(product);
        setProduct(product)
    }
    const haldelSerch = (event) => {
        const NewText = event.target.value;
        setText(NewText)
    }
    // console.log(meals.length);
    // console.log(meals);

    return (
        < >
            <Header haldelSerch={haldelSerch}></Header>
            <div className="meals-container">
                <div className="meal">

                    {
                        meals.map(meal => <Product
                            meal={meal}
                            handleClicked={handleClicked}
                        ></Product>)
                    }

                </div>
                <div className="meals-details">
                    <h3> Meals details </h3>
                    <MealDetails product={product}></MealDetails>
                </div>
            </div>
        </>
    );
};

export default Meal;