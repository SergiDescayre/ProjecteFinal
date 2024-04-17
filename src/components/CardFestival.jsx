import ButtonFavorite from "./ButtonFavorite"
import CountDawn from "./CountDawn"
import DateFestival from "./DateFestival"

const CardFestival = ({fest}) => {
    console.log(fest)
  return (
<div className=" card card-compact w-72 bg-base-100 shadow-xl overflow-hidden">
  <div className="h-40 bg-cover bg-center " style={{backgroundImage: 'url('+ fest.img + ')'}}>
    <div className="flex justify-between m-2">
    <DateFestival date={fest.data_start} />
    <ButtonFavorite fest={fest} />
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title uppercase  w-full ">{fest.name}</h2>
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
  <div className="card-footer">
    <CountDawn date = {fest.data_start} />
  </div>
</div>
  )
}

export default CardFestival


