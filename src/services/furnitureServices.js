import http from 'axios'
import { API_ENDPOINTS } from '../core/constants/apiEndPoint'
import { handleError } from '../core/handler/handleError'
import { handleResponse } from '../core/handler/handleResponse'

const API_ENDPOINTS_GET_ALL_FURNITURES = API_ENDPOINTS.FURNITURES.GET_FURNITURES
const API_ENDPOINTS_GET_FURNITURE = API_ENDPOINTS.FURNITURES.GET_FURNITURE


function getAllFurnitures() {
    return http.get(API_ENDPOINTS_GET_ALL_FURNITURES)
        .then(handleResponse)
        .catch(handleError)
}

function getFurniture(id) {
    const url = API_ENDPOINTS_GET_FURNITURE.replace('<FURNITURE_ID>', id)
    return http.get(url)
        .then(handleResponse)
        .catch(handleError)
}

export { getAllFurnitures, getFurniture }