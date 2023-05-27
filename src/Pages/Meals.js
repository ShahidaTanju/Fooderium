import React, { useEffect, useState } from 'react';
import MealsCard from '../Components/MealsCard';


const Meals = () => {

    const [mealCategories, setMealsCategories] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((res) => res.json())
            .then(data => {
                console.log(data?.categories);
                setMealsCategories(data?.categories);
            })
    }, []);

    return (
        <div className="w-[90%] mx-auto mb-10">
            <p className="text-5xl font-bold">Choose your favourite meals</p>
            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    mealCategories?.map((category) => (
                        <MealsCard key={category.idcategory} category={category}></MealsCard>)
                    )}
            </div>

        </div>
    );
};

export default Meals;