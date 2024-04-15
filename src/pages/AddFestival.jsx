import {useSelector}  from "react-redux"

import FormAddFestival from '../components/formAddFestival'
import { collectionGroup } from "firebase/firestore"

const AddFestival = () => {

    const {isLogin} = useSelector(state => state.authUser)

  return (
    <>
    {isLogin 
     ? <FormAddFestival /> : <div>Debes estar registrado</div>}  
    </>
  )
}

export default AddFestival