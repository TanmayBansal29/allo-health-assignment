import React, { useState } from 'react'
import MealList from '../components/MealList'
import PassengerMealcard from '../components/PassengerMealcard'
import PassengerSelect from '../components/PassengerSelect'

const Home = () => {
    const [filterData, setFilterData] = useState(null)
  return (
<div className='flex w-screen h-screen bg-gray-300 overflow-x-hidden'>
  <MealList filterData={filterData} setFilterData={setFilterData} className="flex-shrink-0 max-w-[300px] overflow-y-auto" />
  <div className="flex flex-col">
    <PassengerSelect className="mb-4" />
    <div className="flex flex-col">
      <PassengerMealcard className="p-4" />
    </div>
  </div>
</div>
)
}

export default Home