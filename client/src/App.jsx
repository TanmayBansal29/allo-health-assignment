import { useState } from "react"
import MealList from "./components/MealList"
import SignUp from "./components/SignUp"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"

function App() {
  const [filterData, setFilterData] = useState(null)
  return(
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/" element={<Login />}/>
      <Route path="/meals" element={<MealList filterData={filterData} setFilterData={setFilterData}/>}/>
    </Routes>
  )
}

export default App
