import type { DispatchType, Rootstore } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useReduxSelector: TypedUseSelectorHook<Rootstore> = useSelector;
export const useReduxDispatch = () => useDispatch<DispatchType>();
