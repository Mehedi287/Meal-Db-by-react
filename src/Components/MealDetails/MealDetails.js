import React from 'react';

const MealDetails = (props) => {
    const { idMeal, strMeal, strArea, strCategory, strYoutube } = props.product
    return (
        <div>
            <h2>Meal Name :{strMeal}</h2>
            <h3>Meal Aeire {strArea}</h3>
            <h3>Meal Id {idMeal}</h3>
            <h3>Meal Catagory {strCategory}</h3>
            <p>You tube Link : {strYoutube}</p>

        </div>
    );
};

export default MealDetails;