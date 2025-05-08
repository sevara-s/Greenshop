import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootStore, DispatchType } from "../../redux/store";

export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;


export const useReduxDispatch = () => useDispatch<DispatchType>();

