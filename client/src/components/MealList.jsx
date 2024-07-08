import React from 'react'
import useFetch from '../utils/useFetch'
import MealBox from './MealBox'
import FilterList from './FilterList'

const MealList = ({filterData, setFilterData}) => {
    const url = "http://localhost:3001/api/v1/resData"
    const meals = useFetch(url).meals
    const handleFilterData = (labelName) => {
      // console.log(labelName)
      setFilterData(labelName)
    }
    // console.log(meals)
    const filteredMeals = filterData ? meals.filter(meal => meal.labels.includes(filterData.toLowerCase())) : meals;
    // console.log(filteredMeals)
  return (
    <>
    <FilterList onFilterChange={handleFilterData}/>
    <div>
        {
            filteredMeals ? filteredMeals.map((meal) => {
                return <MealBox key={meal.id}  meal={meal}/>
            }) : "Loading..."
        }
    </div>
    </>
  )
}

export default MealList