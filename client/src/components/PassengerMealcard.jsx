import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedMeal } from '../redux/slices/passemgerSlice';

const PassengerMealcard = () => {
    const selectedMeal = useSelector((store) => store.passenger.selectedMeal);

    console.log("Meal",selectedMeal);

    let passenger1Data = selectedMeal?.filter((data,index) => data.selectedPassenger === 0);
    let passenger2Data = selectedMeal?.filter((data,index) => data.selectedPassenger === 1);

    // const totalMealPrice = selectedMeal?.reduce((meal,acc) => {
    //     console.log("price", meal)
    //     acc = acc+ +meal.totalPrice;
    //     return acc;
    // },0)

    const dispatch = useDispatch();

    const handleRemoveMeal = (mealId) => {
        let selectedMealIndex = null;
        for(let i=0;i<selectedMeal.length;i++) {
            if(selectedMeal[i].id === mealId ) {
                selectedMealIndex = i;
                
            }
        }
        console.log(selectedMealIndex);

        dispatch(removeSelectedMeal(selectedMealIndex));
    }

    console.log("updated", selectedMeal)
  return (
<div className="flex flex-col gap-4 overflow-y-auto ml-[22px] mt-5">
  {passenger1Data.length > 0 && (
    <div className="border border-gray-200 rounded-lg p-4 max-w-md">
      <h2 className="text-lg font-bold mb-2">Passenger 1</h2>
      {passenger1Data.map((meal) => (
        <div key={meal.id} className="bg-gray-100 rounded-lg p-2 mb-2">
          <p>{meal.title} + {meal.selectedDrink}</p>
          <p className="text-gray-600">Price: ${meal.totalPrice}</p>
          <button 
            onClick={() => handleRemoveMeal(meal.id)} 
            className="bg-red-500 text-white px-3 py-1 rounded-lg mt-2 hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )}

  {passenger2Data.length > 0 && (
    <div className="border border-gray-200 rounded-lg p-4 max-w-md">
      <h2 className="text-lg font-bold mb-2">Passenger 2</h2>
      {passenger2Data.map((meal) => (
        <div key={meal.id} className="bg-gray-100 rounded-lg p-2 mb-2">
          <p>{meal.title} + {meal.selectedDrink}</p>
          <p className="text-gray-600">Price: ${meal.totalPrice}</p>
          <button 
            onClick={() => handleRemoveMeal(meal.id)} 
            className="bg-red-500 text-white px-3 py-1 rounded-lg mt-2 hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )}
</div>






  )
}

export default PassengerMealcard