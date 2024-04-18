import { useEffect, useState } from "react"
import heart from "../assets/heart.svg"
import heartFavorite from "../assets/heartFavorite.svg"
import appFirebase from "../credentials"
import {useSelector} from "react-redux"
import { getAuth } from "firebase/auth"
import { getFirestore,collection, addDoc, query, where, getDocs, deleteDoc} from "firebase/firestore"

const ButtonFavorite = ({fest}) => {
  const {isLogin} = useSelector(state => state.authUser)
    const firestore = getFirestore(appFirebase)
    const [isFavorite, setIsFavorite] = useState(false)
    const [favoritesStatus, setFavoritesStatus] = useState([]);

    useEffect(()=> {
      checkFavoritesStatus();
      handleStatus(fest.docId)
    },[favoritesStatus])

  

    const checkFavoritesStatus = async () => {
      const db = getFirestore();
      try {
        const festivalsRef = collection(db, 'favorites');
        const q = query(festivalsRef);
        const querySnapshot = await getDocs(q);

        const favoritesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const favoritesStatus = favoritesData.map(festival => ({
          id: festival.id,
          name: festival.name,
          isFavorite: festival.isFavorite
        }));
        
        setFavoritesStatus(favoritesStatus);
      } catch (error) {
        console.error('Error al comprobar el estado de los festivales favoritos:', error);
      }
    };


    const handleStatus = (id, userId) => {
        favoritesStatus.map(favorite => {
          if(favorite.id === id && favorite.IdUserFavorite === userId ){
            setIsFavorite(favorite.isFavorite)
          }
        })
    }
    const handleFavorites =  (id) => {
      if(isLogin){
        setIsFavorite(true)
        addFavorite(id) 
      }else{alert("debes iniciar sesion")}
    
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
      
          // Si ya existe el festival como favorito, no lo agregamos nuevamente
          if (!querySnapshot.empty) {
            console.log("El festival ya está en la lista de favoritos.");
            return;
          }
          await addDoc(collection(db, "favorites"), {
            ...fest,
            idUserFavorite : auth,
            isFavorite:true
          });
          console.log("documento añadido")
        } catch (error) {
          console.error("Error al agregar favorito:", error);
        }
      };

  
  return (
    <div>
      <img className="cursor-pointer" src={!isFavorite ? heart : heartFavorite} alt="favorites" onClick={() => handleFavorites(fest.docId,fest.IdUserFavorite)}/>
    </div>
  )
}

export default ButtonFavorite
