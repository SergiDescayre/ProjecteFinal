import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import appFirebase from "../credentials"

import { useFestivalContext } from "../context/FestivalContext"

const InfoFestival =  () => {
    const params = useParams()
    const {infoFestival,getFestivalByDocId} = useFestivalContext()
    useEffect(()=> {
        getFestivalByDocId(params.idFestival)
    })

  return (
    <div>{infoFestival.name}</div>
  )
}

export default InfoFestival