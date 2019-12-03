import { VALIDATE_USER_ACTION } from '../../core/constants/action'
import { getLoginData } from '../../utility/localStorage'
import history from '../../history'

export function validateUser(userData) {
    console.log('check creden', userData, getLoginData())
    return dispatch => {
        dispatch(request())
        const user = getLoginData()
        if (user.username === userData.username && user.password === userData.password) {
            history.push("/users")
            dispatch(success({ isValidUser: true }))
        }
        else {
            dispatch(failure({ error: false }))
        }
    }

    function request() { return { type: VALIDATE_USER_ACTION.REQUEST } }
    function success(isValidUser) { return { type: VALIDATE_USER_ACTION.SUCCESS, payload: { ...isValidUser } } }
    function failure(error) { return { type: VALIDATE_USER_ACTION.FAILURE, payload: { error } } }
}