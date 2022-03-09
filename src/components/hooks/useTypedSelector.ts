import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store";

export const useTypedSector: TypedUseSelectorHook<RootState> = useSelector