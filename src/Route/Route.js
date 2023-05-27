import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Meals from "../Pages/Meals";
import Drinks from "../Pages/Drinks";
import MealsByCategory from "../Pages/MealsByCategory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/meals",
                element: <Meals></Meals>,
            },
            {
                path: "/drinks",
                element: <Drinks></Drinks>,
            },
            {
                path: "/foods/:id",
                element: <MealsByCategory></MealsByCategory>,
            },


        ],
    },

]);

export default router;