import axios from "axios";
import { base_url } from "../constants";


export const Api = axios.create({
    baseURL: base_url
});


const API = {
    getAllAds: () => Api.get('houses'),
    getById: (id) => Api.get(`houses/${id}`),
    deleteAdById: (id) => Api.delete(`houses/${id}`),
    createAd: (data) => Api.post('houses', data),
}

export default API;