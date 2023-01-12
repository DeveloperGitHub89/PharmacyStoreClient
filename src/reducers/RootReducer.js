import { combineReducers } from "redux";
import { medicineReducer } from "./MedicineReducer";

export const rootReducer=combineReducers({medicineReducer});
