import { GET_ALL_SILVER_ACTION } from '../../core/constants/action'
import { getAllSilverData } from '../../utility/localStorage'
import { getAllAnimals } from '../../services/animalServices'

export function getAllSilvers() {
    console.log('check silver data', getAllAnimals())
    return dispatch => {
        dispatch(request())
        const silverData = getAllSilverData();
        dispatch(success({ silverData }))
        // getAllAnimals().then(res => {
        //     const silverData = res
        //     dispatch(success({ silverData }))
        // })

    }

    function request() { return { type: GET_ALL_SILVER_ACTION.REQUEST } }
    function success(silverData) { return { type: GET_ALL_SILVER_ACTION.SUCCESS, payload: { ...silverData } } }
    function failure(error) { return { type: GET_ALL_SILVER_ACTION.FAILURE, payload: { error } } }
}


export function removeSilverById(id, silverData) {
    return { type: GET_ALL_SILVER_ACTION.REMOVE, payload: { id, silverData } }
}


export function addSilver(obj, silvers) {
    return { type: GET_ALL_SILVER_ACTION.ADD, payload: { obj, silvers } }
}