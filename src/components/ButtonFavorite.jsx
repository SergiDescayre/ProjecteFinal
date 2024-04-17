import { useEffect, useState } from "react"
import heart from "../assets/heart.svg"
import heartFavorite from "../assets/heartFavorite.svg"
import appFirebase from "../credentials"
import { getAuth } from "firebase/auth"
import { getFirestore,collection, addDoc, query, where, getDocs, deleteDoc} from "firebase/firestore"

const ButtonFavorite = ({fest}) => {
  const firestore = getFirestore(appFirebase)
    const [isFavorite, setIsFavorite] = useState(false)
    const [existsFavorite, setExistsFavorites] = useState(false)

    useEffect(()=> {
      checkFavorite(fest.id)
    },[])

    console.log(fest.name + " " + existsFavorite)
  
    const handleFavorites =  (id) => {
      setIsFavorite(!isFavorite)
   
      !isFavorite ? addFavorite() : deleteFavorite(id)
      }
    
      const addFavorite = async () => {
        try {
          const db = getFirestore(appFirebase);
          await addDoc(collection(db, "favorites"), {
            fest
          });
          setExistsFavorites(true)
        } catch (error) {
          console.error("Error al agregar favorito:", error);
        }
      };

      const deleteFavorite = async (id) => {
        try {
         
          const q = query(collection(firestore, 'favorites'), where('fest.id', '==', id));
  
          // Obtener documentos que cumplen con la condición
          const querySnapshot = await getDocs(q);
  
          // Para cada documento encontrado, eliminarlo
            querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
            setExistsFavorites(false)
            console.log(`Documento eliminado con ID: ${doc.id}`);
          });
        } catch (error) {
          console.error('Error al eliminar favorito:', error);
        }
      };

      const checkFavorite = async (id) => {
        const auth = getAuth(appFirebase)
        try {
          // Consulta para buscar el documento en la colección de favoritos
          const q = query(collection(firestore, 'favorites'), where('fest.userFavorite', '==', auth.currentUser.uid));
  
          // Obtener documentos que cumplen con la condición
          const querySnapshot = await getDocs(q);
  
          // Verificar si la consulta devuelve algún resultado
          if (!querySnapshot.empty) {
            // El documento existe en la colección de favoritos
            setExistsFavorites(true);
          } else {
            // El documento no existe en la colección de favoritos
            setExistsFavorites(false);
          }
        } catch (error) {
          console.error('Error al comprobar favorito:', error);
        }
      };
  
  return (
    <div>
      <img className="cursor-pointer" src={(!existsFavorite) ? heart : heartFavorite} alt="favorites" onClick={() => handleFavorites(fest.id)}/>
    </div>
  )
}

export default ButtonFavorite
