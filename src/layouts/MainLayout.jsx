import { useEffect } from "react";

import appFirebase from "../credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useDispatch } from "react-redux"
import { setAuthUser, setIsLogin } from "../features/authUserSlice";

import Navbar from "../components/Navbar";
import Routing from "../routes/Routing";

const auth = getAuth(appFirebase);

const MainLayout = () => {
  const dispatch = useDispatch()

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
    <>
      <Navbar />
      <Routing />
    </>

  );
};
export default MainLayout;
