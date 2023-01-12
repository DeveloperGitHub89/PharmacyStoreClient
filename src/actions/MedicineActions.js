import { FETCH_ALL_MEDICINES, FETCH_MEDICINE_BY_PATTERN, SAVE_MEDICINE, SAVE_MEDICINE_IMAGE } from "../constants/MedicineActionConstants";
import { fetchAll, fetchByPattern, save, saveImage } from "../services/MedicineService"

export const saveMedicine=(medicine)=>async (dispatch)=>{
    try {
        const response=await save(medicine);
        dispatch({
            type: SAVE_MEDICINE,
            payload: response.data
        });
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);       
    }
}
export const saveMedicineImage=(formData,medicineId)=>async (dispatch)=>{
    try {
        const response=await saveImage(formData,medicineId);
        dispatch({
            type: SAVE_MEDICINE_IMAGE,
            payload: response.data
        });
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);       
    }
}
export const fetchAllMedicines=()=> async (dispatch)=>{
    try {
        const response=await fetchAll();
        console.log(response);
        console.log("action");
        dispatch({
            type:FETCH_ALL_MEDICINES,
            payload:response.data
        });
    } catch (error) {
        console.log(error);
    }
}

export const fetchMedicineByPattern = (pattern) => async (dispatch)=>{
    try {
        const response=await fetchByPattern(pattern);
        dispatch({
            type:FETCH_MEDICINE_BY_PATTERN,
            payload:response.data
        });
    } catch (error) {
        console.log(error);
    }
}