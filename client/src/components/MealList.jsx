import React from 'react'
import useFetch from '../utils/useFetch'
import FilterList from './FilterList'
import MealBox from './MealBox'

const MealList = ({filterData, setFilterData}) => {
    const url = "/api/v1/resData"
    const meals = useFetch(url).meals
    const handleFilterData = (labelName) => {
      setFilterData(labelName)
    }
    const filteredMeals = filterData ? meals.filter(meal => meal.labels.includes(filterData.toLowerCase())) : meals;
  return (
    <div className='flex flex-col ml-4'>
    <FilterList onFilterChange={handleFilterData}/>
    <div>
        {
            filteredMeals ? filteredMeals.map((meal) => {
                return <MealBox key={meal.id} meal={meal}/>
            }) : "Loading..."
        }
    </div>
    </div>
  )
}

export default MealList