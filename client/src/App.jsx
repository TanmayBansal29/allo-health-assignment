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
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/meals" element={<Home/>}/>
    </Routes>
    </Provider>
  )
}

export default App
