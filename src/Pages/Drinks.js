
import React, { useEffect, useState } from 'react';
import DrinksCard from '../Components/DrinksCard';

const Drinks = () => {

    const [drinksCategories, setDrinksCategories] = useState([]);
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${isOn ? "Cocktail" : "Ordinary_Drink"}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data?.drinks);
                setDrinksCategories(data?.drinks);
            });
    }, [isOn]);

    const switching = () => {
        setIsOn(!isOn)
    }


    return (
        <div className="w-[90%] mx-auto mb-10">
            <div className="flex flex-col items-center justify-center">
                <p className="mr-5 text-5xl font-bold">Choose your favourite {isOn ? "Cocktail" : "Ordrinary"} drinks category
                </p>
                <div className="flex items-center mt-5">
                    <p>Ordinary Drinks</p>
                    <input onChange={switching} type="checkbox" className="toggle toggle-info mx-2" />
                    <p>Cocktails</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    drinksCategories?.map(category => (<DrinksCard category={category}></DrinksCard>))
                }
            </div>
        </div>
    );
};

export default Drinks;