import { useEffect, useState } from "react"
import heart from "../assets/heart.svg"
import heartFavorite from "../assets/heartFavorite.svg"
import appFirebase from "../credentials"
import { useSelector } from "react-redux"
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { useFestivalContext } from "../context/FestivalContext"
import Modal from "./Modal"


const ButtonFavorite = ({ fest }) => {
  const { isLogin } = useSelector(state => state.authUser)
  const [isFavorite, setIsFavorite] = useState(false)
  const {setMessageModal} = useFestivalContext()

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const handleFavorites = (id) => {
    if (isLogin) {
      setIsFavorite(true)
      addFavorite(id)
    } else {
      document.getElementById('my_modal_5').showModal()
      setMessageModal("Debes estar registrado para guardar favoritos")

    }

  }
  const addFavorite = async (id) => {
    console.log(id)
    try {
      const auth = getAuth(appFirebase).currentUser.uid
      const db = getFirestore(appFirebase);
      const querySnapshot = await getDocs(
        query(
          collection(db, "favorites"),
          where("docId", "==", id),
          where("idUserFavorite", "==", auth)
        )
      );

     
      if (!querySnapshot.empty) {
        document.getElementById('my_modal_5').showModal()
        setMessageModal("El festival ya está en la lista de favoritos.");
        return;
      }
      await addDoc(collection(db, "favorites"), {
        ...fest,
        idUserFavorite: auth,
        isFavorite: true
      });
      console.log("documento añadido")
    } catch (error) {
      console.error("Error al agregar favorito:", error);
    }
  };

  const checkFavoriteStatus = async () => {
    if (!isLogin) return; // Si el usuario no ha iniciado sesión, no hay favoritos que cargar

    try {
      const auth = getAuth(appFirebase).currentUser.uid;
      const db = getFirestore(appFirebase);
      const querySnapshot = await getDocs(
        query(
          collection(db, "favorites"),
          where("docId", "==", fest.docId),
          where("idUserFavorite", "==", auth)
        )
      );

      if (!querySnapshot.empty) {

      setIsFavorite(true);
      }else(setIsFavorite(false))
    } catch (error) {
      console.error("Error al verificar el estado del favorito:", error);
    }
  };


  return (
    <div>
      <Modal />
      <img className="cursor-pointer" src={!isFavorite ? heart : heartFavorite} alt="favorites" onClick={() => handleFavorites(fest.docId)} />
    </div>
  )
}

export default ButtonFavorite
