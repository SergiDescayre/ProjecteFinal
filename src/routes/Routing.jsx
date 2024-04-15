import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import ListFestivals from "../pages/ListFestivals"
import AddFestival from "../pages/AddFestival"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/festivales" element={<ListFestivals/>} />
      <Route path="/addFestival" element={<AddFestival/>} />
    </Routes>
  )
}

export default Routing
