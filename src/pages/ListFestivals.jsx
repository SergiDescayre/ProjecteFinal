import { useEffect, useState } from "react";
import appFirebase from "../credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CardFestival from "../components/CardFestival";

const ListFestivals = () => {
    const [festivals, setFestivals] = useState([])

    useEffect(() => {
        getFestivals()
    }, [])

    
    const getFestivals = async () => {
    // Obtener una referencia a la base de datos Firestore
    const db = getFirestore(appFirebase);

    // Recuperar una colección de documentos
    const querySnapshot = await getDocs(collection(db, "festivals"));
    const arrayFestivals=[]

    // Iterar sobre los documentos y acceder a los datos
    querySnapshot.forEach((doc) => {
        arrayFestivals.push({id:doc.id, ...doc.data()})
    });
    setFestivals(arrayFestivals)
  };
  
  return (
    <div className ="flex flex-wrap gap-10 justify-center mt-10">
        {festivals.map(fest => {
            return (
                <CardFestival key={fest.id} fest={fest} />
            )
        })}
    </div>
   
  )
}

export default ListFestivals