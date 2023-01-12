import axios from "axios";
import { MEDICINE_URL_PREFIX } from "../constants/ApiServiceConstants";

export function save(medicine){
    return axios.post(MEDICINE_URL_PREFIX,medicine);
}
export function saveImage(formData,medicineId){
    return axios.post(MEDICINE_URL_PREFIX+'/upload/api/image/'+medicineId,formData)
}
export function fetchAll() {
    return axios.get(MEDICINE_URL_PREFIX);
}

export function fetchById(id){
    return axios.get(`${MEDICINE_URL_PREFIX}/${id}`);
}

export function fetchByPattern(pattern){
    return axios.get(`${MEDICINE_URL_PREFIX}/pattern/${pattern}`);
}
