import { useState } from "react";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setShowLogin } from "../features/authUserSlice";

import { festivales } from "../data/festivales";
import ListFestivals from "../pages/ListFestivals";


const MainLayout = () => {
  
  const dispatch = useDispatch();
  const [theme, isTheme] = useState("ligth");



  const buscador = festivales.filter(
    (fest) => fest.modality.includes("Lindy Hop") || fest.modality.includes("")
  );



  const { showLogin } = useSelector((state) => state.authUser);
  const isLogin = true;
  const handleShowLogin = () => {
    dispatch(setShowLogin(!showLogin));
  };

  return (
    <>
      <div data-theme={theme} className="dark:bg-slate-600">
        {showLogin ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <button onClick={handleShowLogin} className="btn btn-primary">
              mostrar login
            </button>
            <ListFestivals />
          </>
        )}
      </div>
    </>
  );
};
export default MainLayout;
