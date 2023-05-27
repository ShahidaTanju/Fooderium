import React from 'react';

const MealsCard = ({ category }) => {

    console.log(category);

    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = category;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={strCategoryThumb} alt={strCategory} /></figure>
                <div className="card-body flex flex-cols-3 justify-between">
                    <h2 className="card-title">{strCategory}</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-xs">Show Meals</button>
                        <button className="btn btn-info btn-xs">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealsCard;