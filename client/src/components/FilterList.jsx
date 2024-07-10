import React from 'react'
import useFetch from '../utils/useFetch'
import { Button } from '@mui/material'

const FilterList = ({onFilterChange}) => {
  const url = "/api/v1/resData"
  const labels = useFetch(url).labels
  // console.log(labels)

  return (

    <div className="flex gap-2 flex-wrap mt-2 justify-center">
      <Button 
        variant="contained" 
        onClick={() => onFilterChange(null)} 
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        All
      </Button>
      {labels ? labels.map((item) => (
        <Button 
          variant="contained" 
          key={item.id} 
          onClick={() => onFilterChange(item.label)} 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {item.label}
        </Button>
      )) : "Loading..."}
    </div>
    

  )
}

export default FilterList