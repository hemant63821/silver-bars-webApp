import http from 'axios'
import { API_ENDPOINTS } from '../core/constants/apiEndPoint'
import { handleError } from '../core/handler/handleError'
import { handleResponse } from '../core/handler/handleResponse'

const API_ENDPOINTS_GET_ALL_ANIMALS = 'localhost:8080/putawayVarianceForVerification'
// const API_ENDPOINTS_GET_ANIMAL = API_ENDPOINTS.ANIMALS.GET_ANIMAL


function getAllAnimals() {
    return http.get('http://localhost:8080/putawayVarianceForVerification')
        .then(handleResponse)
        .catch(handleError)
}

// function getAnimal(animalId) {
//     const url = API_ENDPOINTS_GET_ANIMAL.replace('<ANIMAL_ID>', animalId)
//     return http.get(url)
//         .then(handleResponse)
//         .catch(handleError)
// }

export { getAllAnimals }