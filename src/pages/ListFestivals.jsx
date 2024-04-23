import { useEffect } from "react";
import { useFestivalContext } from "../context/FestivalContext";

import ListFestivalsModality from "../components/ListFestivalsModality";

const ListFestivals = () => {
    const {getFestivals, festivals} = useFestivalContext()
    useEffect(() => {
        getFestivals()
    }, [])


    const lindyHop = festivals.filter(fest => fest.modality.includes("Lindy Hop"))

    const balboa = festivals.filter(fest => fest.modality.includes("Balboa"))

    const blues = festivals.filter(fest => fest.modality.includes("Blues"))
  
  return (
    <>
    <ListFestivalsModality title={"lindy Hop"} modality = {lindyHop} />
    <ListFestivalsModality title={"Blues"} modality = {blues} />
    <ListFestivalsModality title={"Balboa"} modality = {balboa} />
    </>
   
  )
}

export default ListFestivals