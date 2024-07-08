import React from 'react'
import { Button } from '@mui/material'

const MealBox = ({meal}) => {
    const drinks = meal.drinks
  return (
    <>
        {/* <img src={meal.img} /> */}
        <div>{meal.title} + Drink</div>
        <div>Starter: {meal.starter}</div>
        <div>Dessert: {meal.desert}</div>
        {
            drinks.map((drink) => {
                return <Button key={drink.id} variant='outlined'>{drink.title}</Button>
            })
        }
    </>
  )
}

export default MealBox