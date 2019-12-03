import http from 'axios'
import { API_ENDPOINTS } from '../core/constants/apiEndPoint'
import { handleError } from '../core/handler/handleError'
import { handleResponse } from '../core/handler/handleResponse'

const API_ENDPOINTS_GET_ALL_TECHS = API_ENDPOINTS.TECHS.GET_TECHS
const API_ENDPOINTS_GET_TECH = API_ENDPOINTS.TECHS.GET_TECH


function getAllTechs() {
    return http.get(API_ENDPOINTS_GET_ALL_TECHS)
        .then(handleResponse)
        .catch(handleError)
}

function getTech(id) {
    const url = API_ENDPOINTS_GET_TECH.replace('<TECH_ID>', id)
    return http.get(url)
        .then(handleResponse)
        .catch(handleError)
}

export { getAllTechs, getTech }