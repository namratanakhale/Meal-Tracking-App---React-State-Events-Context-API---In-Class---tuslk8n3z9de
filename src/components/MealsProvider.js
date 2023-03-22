import React, { useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans', ticked: false },
    { id: 2, name: 'Baked Sweet Potatoes', ticked: false },
    { id: 3, name: 'Baked Potatoes', ticked: false },
]

export const MealsContext = React.createContext();

const MealsProvider = ({ children }) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (id) => {
        setMeals((prevMeals) => {
            const updatedMeals = prevMeals.map((meal) => {
                if (meal.id === id) {
                    return { ...meal, ticked: !meal.ticked };
                }
                return meal;
            });
            return updatedMeals;
        });
    };

    return (
        <MealsContext.Provider value={{ meals, tickMeal }}>
            {children}
        </MealsContext.Provider>
    )
};

export default MealsProvider;
