import { useState } from "react"
import heart from "../assets/heart.svg"
import heartFavorite from "../assets/heartFavorite.svg"
import appFirebase from "../credentials"
import { getAuth } from "firebase/auth"
import { getFirestore,collection, addDoc, query, where, getDocs, deleteDoc} from "firebase/firestore"

const ButtonFavorite = ({fest}) => {
  const auth = getAuth(appFirebase).currentUser.uid
  const firestore = getFirestore(appFirebase)
    const [isFavorite, setIsFavorite] = useState(false)
  
    const handleFavorites =  (id) => {
      setIsFavorite(!isFavorite)
      !isFavorite ? addFavorite() : deleteFavorite(id)
      }
    

      const addFavorite = async (id) => {
        try {
          const db = getFirestore(appFirebase);
          await addDoc(collection(db, "favorites"), {
            ...fest, userIdFavorite:auth
          });
          console.log("documento añadido con ID: "+ fest.id)
        } catch (error) {
          console.error("Error al agregar favorito:", error);
        }
      };

      const deleteFavorite = async (id) => {
        console.log(id)
        try {
         
          const q = query(collection(firestore, 'favorites'), where('id', '==', id));
  
          // Obtener documentos que cumplen con la condición
          const querySnapshot = await getDocs(q);
  
          // Para cada documento encontrado, eliminarlo
            querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
            console.log(`Documento eliminado con ID: ${doc.id}`);
          });
        } catch (error) {
          console.error('Error al eliminar documentos:', error);
        }
      };
  
  return (
    <div>
      <img className="cursor-pointer" src={!isFavorite ? heart : heartFavorite} alt="favorites" onClick={() => handleFavorites(fest.id)}/>
    </div>
  )
}

export default ButtonFavorite
