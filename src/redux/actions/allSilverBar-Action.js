import { GET_ALL_SILVER_ACTION } from '../../core/constants/action'
import { getAllSilverData } from '../../utility/localStorage'

export function getAllSilvers() {
    console.log('check silver data', getAllSilverData())
    return dispatch => {
        dispatch(request())
        const silverData = getAllSilverData()
        dispatch(success({ silverData }))
    }

    function request() { return { type: GET_ALL_SILVER_ACTION.REQUEST } }
    function success(silverData) { return { type: GET_ALL_SILVER_ACTION.SUCCESS, payload: { ...silverData } } }
    function failure(error) { return { type: GET_ALL_SILVER_ACTION.FAILURE, payload: { error } } }
}


export function removeSilverById(id, silverData) {
    return { type: GET_ALL_SILVER_ACTION.REMOVE, payload: { id, silverData } }
}


export function addSilver(silverData) {
    return { type: GET_ALL_SILVER_ACTION.REMOVE, payload: { silverData } }
}