import { FETCH_ALL_MEDICINES, FETCH_MEDICINE_BY_PATTERN, SAVE_MEDICINE, SAVE_MEDICINE_IMAGE } from "../constants/MedicineActionConstants";

export const medicineReducer=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case SAVE_MEDICINE:return [...state,payload];
        case SAVE_MEDICINE_IMAGE:return [...state,payload];
        case FETCH_ALL_MEDICINES:return payload;
        case FETCH_MEDICINE_BY_PATTERN:return payload;
        default: return state
    }
}