import { useState } from "react"
import heart from "../assets/heart.svg"
import heartFavorite from "../assets/heartFavorite.svg"

const ButtonFavorite = ({fest}) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleFavorites = (id) => {
        

    }
  return (
    <div>
      <img className="cursor-pointer" src={!isFavorite ? heart : heartFavorite} alt="favorites" onClick={() => handleFavorites(fest.id)}/>
    </div>
  )
}

export default ButtonFavorite
