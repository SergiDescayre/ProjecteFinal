import appFirebase from "../credentials"
import { getAuth } from "firebase/auth"
import { getFirestore,collection, addDoc, query, where, getDocs, deleteDoc} from "firebase/firestore"

const firestore = getFirestore(appFirebase)

//FUNCTIONS FAVORITES

export const addFavorite = async (id) => {
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

export const deleteFavorite = async (id) => {
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
