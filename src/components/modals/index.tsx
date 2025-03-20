import { useReduxSelector } from "../../hooks/useRedux"
import AuthorizationModal from "./authorization-modals"


const Modals =()=>{
  const {modalAuthorizationVisibility}=useReduxSelector(state=>state.modalSlice)
  return (
    <>
    {modalAuthorizationVisibility &&  <AuthorizationModal/>}


    </>
  )
}

export default Modals
