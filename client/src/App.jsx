import { Provider } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { store } from "../src/redux/store/store"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

function App() {
  
  return(
    <Provider store={store}>
    <Routes>
      <Route path="/meals" element={<Home/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
    </Provider>
  )
}

export default App
