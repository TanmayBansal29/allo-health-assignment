import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedPassenger } from '../redux/slices/passengerSlice';

const PassengerSelect = () => {

    const data = ["Passenger 1", "Passenger 2"]

    const dispatch = useDispatch();
    const handleSelectedPassenger = (index) => {
        dispatch(updateSelectedPassenger(index))
    }

    const selectedPassenger = useSelector((store) => store.passenger.selectedPassenger);
    
  return (
<div className='w-[450px] h-[300px] rounded-lg bg-gray-800 text-white ml-5 mt-2 p-10'>
  <div className='pb-6 font-extrabold text-xl'>✈️ SELECT MEALS</div>
  {
    data.map((item, index) => (
      <button 
        key={index} 
        onClick={() => handleSelectedPassenger(index)} 
        className={`flex justify-between items-center p-4 mt-2 w-[350px] rounded-lg bg-gray-700 text-white shadow-md transition duration-300 ease-in-out ${
          selectedPassenger === index ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <div>{item}</div>
        <div className={`px-3 py-1 rounded-lg ${
          selectedPassenger === index ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300'
        }`}
        >
          {selectedPassenger === index ? 'Selected' : 'Not selected'}
        </div>
      </button>
    ))
  }
</div>

  )
}

export default PassengerSelect