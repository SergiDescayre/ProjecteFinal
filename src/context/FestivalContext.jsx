import { createContext, useContext, useState } from "react"
import appFirebase from "../credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const FestivalContext = createContext()

const ContexProvider = ({ children }) => {

    const [festivals, setFestivals] = useState([])
    const [favorites ,setFavorites] = useState([])
    

    const getFilterModality = (modalityFilter) => {
        return festivals.filter(fest=> fest.modality.includes(modalityFilter))
    }

    //Traer festivales firebase

    const getFestivals = async () => {
        // Obtener una referencia a la base de datos Firestore
        const db = getFirestore(appFirebase);

        // Recuperar una colección de documentos
        const querySnapshot = await getDocs(collection(db, "festivals"));
        const arrayFestivals = []

        // Iterar sobre los documentos y acceder a los datos
        querySnapshot.forEach((doc) => {
            arrayFestivals.push({ id: doc.id, ...doc.data() })
        });
        setFestivals(arrayFestivals)
    };

    return (
        <FestivalContext.Provider
            value={{
                favorites,
                festivals,
               
                getFestivals,
                setFavorites,
                getFilterModality,
               
              
            }}>
            {children}
        </FestivalContext.Provider>
    )
}

export default ContexProvider

export const useFestivalContext = () => useContext(FestivalContext) 