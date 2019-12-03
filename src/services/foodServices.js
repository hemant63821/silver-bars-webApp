import http from 'axios'
import { API_ENDPOINTS } from '../core/constants/apiEndPoint'
import { handleError } from '../core/handler/handleError'
import { handleResponse } from '../core/handler/handleResponse'

const API_ENDPOINTS_GET_ALL_FOODS = API_ENDPOINTS.FOODS.GET_FOODS
const API_ENDPOINTS_GET_FOOD = API_ENDPOINTS.FOODS.GET_FOOD


function getAllFoods() {
    return http.get(API_ENDPOINTS_GET_ALL_FOODS)
        .then(handleResponse)
        .catch(handleError)
}

function getFood(id) {
    const url = API_ENDPOINTS_GET_FOOD.replace('<FOOD_ID>', id)
    return http.get(url)
        .then(handleResponse)
        .catch(handleError)
}

export { getAllFoods, getFood }