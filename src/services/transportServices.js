import http from 'axios'
import { API_ENDPOINTS } from '../core/constants/apiEndPoint'
import { handleError } from '../core/handler/handleError'
import { handleResponse } from '../core/handler/handleResponse'

const API_ENDPOINTS_GET_ALL_TRANSPORTS = API_ENDPOINTS.TRANSPORTS.GET_TRANSPORTS
const API_ENDPOINTS_GET_TRANSPORT = API_ENDPOINTS.TRANSPORTS.GET_TRANSPORT


function getAllTransports() {
    return http.get(API_ENDPOINTS_GET_ALL_TRANSPORTS)
        .then(handleResponse)
        .catch(handleError)
}

function getTransport(id) {
    const url = API_ENDPOINTS_GET_TRANSPORT.replace('<TRANSPORT_ID>', id)
    return http.get(url)
        .then(handleResponse)
        .catch(handleError)
}

export { getAllTransports, getTransport }