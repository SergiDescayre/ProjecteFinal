
import ButtonDeleteFav from "./ButtonDeleteFav"
import ButtonAddFav from "./ButtonFavorite"
import CountDawn from "./CountDawn"
import DateFestival from "./DateFestival"
import { useNavigate } from "react-router-dom"
import info from "../assets/info.svg"

const CardFestival = ({fest,showButtonDeleteFavorite,showButtonAddFavorite}) => {
  const navigate = useNavigate()

  const handleCard = (idFestival) => {
    navigate(`/infoFestival/${idFestival}`)
  }
  
  return (
<div className="card rounded-lg min-w-72 h-72 text-orange-200 shadow-xl overflow-hidden">
  <div className="h-40 bg-cover bg-center " style={{backgroundImage: 'url('+ fest.img + ')'}}>
    <div className="flex justify-between m-2">
    <DateFestival date={fest.data_start} />
   
    </div>
  </div>
  <div className=" bg-zinc-900">
  <div className="flex items-center p-3 gap-2">
    <h2 className="card-title uppercase  w-full ">{fest.name}</h2>
    <img onClick={()=> handleCard(fest.docId)  }  src={info} alt="more info" className="w-7 cursor-pointer" />
    {showButtonAddFavorite && <ButtonAddFav fest={fest} /> }
    {showButtonDeleteFavorite && <ButtonDeleteFav fest={fest} />}
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
  <div className="card-footer">
    <CountDawn date = {fest.data_start} docId={fest.docId} />
  </div>

  </div>
</div>
  )
}

export default CardFestival


