import http from 'axios'
import { API_ENDPOINTS } from '../core/constants/apiEndPoint'
import { handleError } from '../core/handler/handleError'
import { handleResponse } from '../core/handler/handleResponse'

const API_ENDPOINTS_GET_ALL_NATURES = API_ENDPOINTS.NATURES.GET_NATURES
const API_ENDPOINTS_GET_NATURE = API_ENDPOINTS.FURNITURES.GET_FURNITURE


function getAllNatures() {
    return http.get(API_ENDPOINTS_GET_ALL_NATURES)
        .then(handleResponse)
        .catch(handleError)
}

function getNature(id) {
    const url = API_ENDPOINTS_GET_NATURE.replace('<NATURE_ID>', id)
    return http.get(url)
        .then(handleResponse)
        .catch(handleError)
}

export { getAllNatures, getNature }