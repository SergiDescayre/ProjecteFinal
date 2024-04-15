import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import ListFestivals from "../pages/ListFestivals"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/festivales" element={<ListFestivals/>} />
    </Routes>
  )
}

export default Routing
