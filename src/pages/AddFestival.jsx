import {useSelector}  from "react-redux"

import FormAddFestival from '../components/FormAddFestival'
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