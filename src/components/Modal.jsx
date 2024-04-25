import { useFestivalContext } from "../context/FestivalContext"
import { useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"


const Modal = () => {

const {messageModal} = useFestivalContext()

const {isLogin} = useSelector(state => state.authUser )

const navigate = useNavigate()

const handleClose = () => {
    navigate("/login")
}

  return (
   
    <dialog id="my_modal_5" className="modal modal-center">
    <div className="modal-box bg-zinc-800">
    <span className="py-2 text-lg">{messageModal}</span>
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn bg-orange-200 mx-3 ">Cerrar</button>
        {!isLogin && <button onClick={handleClose} className="btn btn-outline bg-orange-200">Registrarse</button>}
      </form>
    </div>
  </div>
</dialog>
  )
}

export default Modal
