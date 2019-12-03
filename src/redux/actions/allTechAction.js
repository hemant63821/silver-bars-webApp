import { getAllTechs } from '../../services/techServices'
import { ALL_TECH_ACTION } from '../../core/constants/action'

export function getTechs() {
    return dispatch => {
        dispatch(request())
        return getAllTechs()
            .then(apiResponse => {
                if (apiResponse.message === 'success') {
                    const techs = apiResponse.techs
                    console.log('check techs techs', techs)
                    dispatch(success({
                        techs,
                    }))
                } else {
                    return Promise.reject(apiResponse)
                }
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: ALL_TECH_ACTION.REQUEST } }
    function success(techs) { return { type: ALL_TECH_ACTION.SUCCESS, payload: { ...techs } } }
    function failure(error) { return { type: ALL_TECH_ACTION.FAILURE, payload: { error } } }
}