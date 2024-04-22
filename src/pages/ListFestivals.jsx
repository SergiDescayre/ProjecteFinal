import { useEffect } from "react";
import { useFestivalContext } from "../context/FestivalContext";
import CardFestival from "../components/CardFestival";

const ListFestivals = () => {
    const {getFestivals, festivals} = useFestivalContext()

    const showButtonAddFavorite = true

    useEffect(() => {
        getFestivals()
    }, [])

    
    
  
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