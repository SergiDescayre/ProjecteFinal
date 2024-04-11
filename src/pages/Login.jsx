import { useState } from "react";
import appFirebase from "../credentials";
//import {useNavigate} from "react-router-dom"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsLogin,
  setAuthUser,
  setIsRegister,
} from "../features/authUserSlice.js";

import logo from "../assets/logo.png";

const auth = getAuth(appFirebase);

const Login = () => {
  const { isRegister } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  //const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleIsRegister = () => {
    dispatch(setIsRegister(!isRegister));
  };

  const aunthenticate = async (e) => {
    e.preventDefault();
    dispatch(setAuthUser(user));
    if (user.email === "" || user.password === "") {
      setError("Debes rellenar todos los campos");
      return;
    } else {
      setError("");
    }

    if (!isRegister) {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        dispatch(setIsLogin(true));
        console.log("loguejat");
        //navigate("/")
      } catch (error) {
        switch (error.code) {
          case "auth/weak-password":
            setError("Contraseña mínima de 6 caracteres");
            break;
          case "auth/invalid-email":
            setError("Email no valido");
            break;
          case "auth/email-already-in-use":
            setError("El email ya está en uso");
            break;
          // Manejar otros casos de error según sea necesario
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        dispatch(setIsLogin(true));
        console.log("loguejat");
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            setError("Email no valido");

            break;
          case "auth/invalid-credential":
            setError("El email o la contraseña son incorrectas");
            break;
        }
      }
    }
  };

  return (
    <section className="container_login flex items-center h-screen ">
      <div className="h-screen md:h-[500px] md:card bg-slate-100 w-screen px-5 md:w-[400px] md:mx-auto">
        <div className="flex flex-col justify-center h-screen">
        <img src={logo} alt="logo" className="w-[350px] mx-auto -mt-[400px] mb-[100px] md:hidden" />
          <form
            onSubmit={aunthenticate}
            noValidate
            className="grid grid-cols-1 gap-6"
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="*******"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <button className="btn btn-neutral">
              {isRegister ? "Inicia sesión" : "Registro"}
            </button>
          </form>
          <div className="grid grid-cols-2 items-center mt-5">
            <p className="">
              {isRegister ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
            </p>
            <button onClick={handleIsRegister} className=" btn btn-neutral">
              {isRegister ? "Registro" : "Inicia sesión"}
            </button>
          </div>
          {error !== "" && (
            <div role="alert" className="alert alert-error mt-5 text-white">
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
