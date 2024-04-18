import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import ListFestivals from "../pages/ListFestivals"
import AddFestival from "../pages/AddFestival"
import MyFestivals from "../pages/MyFestivals"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/festivales" element={<ListFestivals/>} />
      <Route path="/addFestival" element={<AddFestival/>} />
      <Route path="/myFestivals" element={<MyFestivals />} />
    </Routes>
  )
}

export default Routing
