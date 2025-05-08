import { useReduxSelector } from "../../hooks/useRedux";
import AuthrationModal from "./authration-modals";
import TrackModal from "./track-modals";


const Modals = () => {
  const { modalAuthVisibility ,trackmodalVisibility} = useReduxSelector(
    (state) => state.modalSlice
  );
  return (
    <>
      {modalAuthVisibility && <AuthrationModal />}
      {trackmodalVisibility && <TrackModal />}
    
    </>
  );
};

export default Modals;
