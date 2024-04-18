import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import appFirebase from '../credentials';
import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth';


const MyFestivals = () => {
    const [favorites ,setFavorites] = useState([])
    const loadFavorites = async () => {
        const auth = getAuth(appFirebase).currentUser.uid
        try {
          const db = getFirestore(appFirebase);
          const favoritesRef = collection(db, "favorites");
          const q = query(favoritesRef, where("idUserFavorite", "==", auth));
          onSnapshot(q, (snapshot) => {
            const favoritesData = [];
            snapshot.forEach((doc) => {
              favoritesData.push({ id: doc.id, ...doc.data() });
            });
            setFavorites(favoritesData);
          });
    
        } catch (error) {
          console.error("Error al cargar favoritos:", error);
        }
      };

      useEffect(()=> {
        loadFavorites()
        
      },[])
      console.log(favorites)

  return (
    <div>
      Mis festivales favoritos
    </div>
  )
}

export default MyFestivals
