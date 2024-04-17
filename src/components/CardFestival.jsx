import CountDawn from "./CountDawn"
import DateFestival from "./DateFestival"

const CardFestival = ({fest}) => {
  return (
<div className=" card card-compact w-72 bg-base-100 shadow-xl overflow-hidden">
  <div className="h-40 bg-cover bg-center " style={{backgroundImage: 'url('+ fest.img + ')'}}>
    <DateFestival date={fest.data_start} />
  </div>
  <div className="card-body">
    <h2 className="card-title">{fest.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  <div className="card-footer">
    <CountDawn date = {fest.data_start} />
  </div>
</div>
  )
}

export default CardFestival


