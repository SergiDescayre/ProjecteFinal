import { useEffect } from "react";

import appFirebase from "../credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useDispatch } from "react-redux"
import { setAuthUser, setIsLogin } from "../features/authUserSlice";

import Navbar from "../components/Navbar";
import Routing from "../routes/Routing";
import Footer from "../components/Footer";

const MainLayout = () => {

  const dispatch = useDispatch()
  const auth = getAuth(appFirebase);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObject = {
          email:user.email,
          password:user.password
        }
        dispatch(setIsLogin(true))
        dispatch(setAuthUser(userObject))
      }
    });

    // Realiza la limpieza del listener cuando el componente se desmonte
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="bg-stone-300 h-screen">
      <Navbar />
      <Routing />
      <Footer />
    </div>

  );
};
export default MainLayout;
