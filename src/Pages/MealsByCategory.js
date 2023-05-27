import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealsByCategory = () => {


    const { name } = useParams();

    const { foods, setFoods } = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data?.meals);
            });
    }, [name]);


    return (
        <div>
            <p>Choose Your Desire {name} Item</p>
        </div>
    );
};

export default MealsByCategory;