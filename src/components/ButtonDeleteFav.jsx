import appFirebase from "../credentials"
import { getFirestore,collection, addDoc, query, where, getDocs, deleteDoc} from "firebase/firestore"
import trash from "../assets/trash.svg"

const ButtonDeleteFav = ({fest}) => {
    const firestore = getFirestore(appFirebase)
   
    const handleFavorites =  (id) => {
        deleteFavorite(id)
    }
    
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
    <div onClick={() => handleFavorites(fest.id)}>
    <img src={trash} alt="trash"/>
    
</div>
  )
}

export default ButtonDeleteFav
