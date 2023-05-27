import React from 'react';

const DrinksCard = ({ category }) => {

    console.log(category);

    const { idDrink, strDrink, strDrinkThumb } = category;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={strDrinkThumb} alt={strDrink} /></figure>
                <div className="card-body flex flex-col justify-between">
                    <h2 className="card-title">{strDrink}</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-info btn-xs">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinksCard;