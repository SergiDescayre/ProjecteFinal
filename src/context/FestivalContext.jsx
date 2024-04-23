import { createContext, useContext, useState } from "react"
import appFirebase from "../credentials";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
const FestivalContext = createContext()

const ContexProvider = ({ children }) => {

    const [festivals, setFestivals] = useState([])
    const [favorites ,setFavorites] = useState([])
    const [infoFestival ,setInfoFestival]  = useState({})


    const getFilterModality = (modalityFilter) => {
        return festivals.filter(fest=> fest.modality.includes(modalityFilter))
    }

    //Traer festival po IdDoc para pintar la Info

    const getFestivalByDocId = async (docId) => {
        const db = getFirestore(appFirebase)
        try {
            const docRef = doc(db,"festivals",docId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const data = docSnap.data()
                setInfoFestival(data)
               
            } else {
                console.log("No such document!");
            }

        
        } catch (error) {
            console.log(error)
        }
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
                infoFestival,
                getFestivalByDocId,
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