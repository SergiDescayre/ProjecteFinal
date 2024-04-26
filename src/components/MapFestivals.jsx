
import { useEffect, useState } from "react";
import { useFestivalContext } from "../context/FestivalContext";

const MapFestivals = () => {

  const {coords, getCoords} = useFestivalContext()

    useEffect(() => {
        getCoords()
    }, [])

   

  return (
<div>Hola</div>

  ) 
  
};

export default MapFestivals;
