import React, { useEffect, useState } from 'react';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])


    return (
        <div>

        </div>
    );
};

export default Meal;