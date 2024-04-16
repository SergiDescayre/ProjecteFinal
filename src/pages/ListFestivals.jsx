import { useEffect, useState } from "react";
import appFirebase from "../credentials";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
    <div>
        {festivals.map(fest => {
            return (
                <div>
                    <img key={fest.id} className="w-[250px] h-[150px] object-cover" src={fest.img} alt={fest.name} />
                </div>
            )
        })}
    </div>
   
  )
}

export default ListFestivals