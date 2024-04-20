import { useEffect, useState } from "react";
import appFirebase from "../credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CardFestival from "../components/CardFestival";

const ListFestivals = () => {
    const [festivals, setFestivals] = useState([])

    const showButtonAddFavorite = true

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
    <div className ="flex flex-wrap gap-10 justify-center m-10">
        {festivals.map(fest => {
            return (
                <CardFestival key={fest.id} fest={fest} showButtonAddFavorite={showButtonAddFavorite} />
            )
        })}
    </div>
   
  )
}

export default ListFestivals