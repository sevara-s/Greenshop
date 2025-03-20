import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { Rootstore } from "../../redux/store"; // Ensure this type exists

export const useReduxSelector: TypedUseSelectorHook<Rootstore> = useSelector;
