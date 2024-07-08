import React from 'react'
import useFetch from '../utils/useFetch'
import { Button } from '@mui/material'

const FilterList = ({onFilterChange}) => {
  const url = "http://localhost:3001/api/v1/resData"
  const labels = useFetch(url).labels
  // console.log(labels)

  return (
    <div>
      <Button variant='contained' onClick={() => onFilterChange(null)}>All</Button>
      {
        labels ? labels.map((item) => {
          return (
            <Button variant='contained' key={item.id} onClick={() => onFilterChange(item.label)}>{item.label}</Button>
          )
        }) : "Loading..."
      }
    </div>
  )
}

export default FilterList