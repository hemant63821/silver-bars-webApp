import { USER_ACTION } from '../../core/constants/action'
import { getUsers } from '../../utility/localStorage'

export function allUsers() {
    console.log('check users', getUsers())
    return dispatch => {
        dispatch(request())
        const users = getUsers()
        dispatch(success({ users }))
    }

    function request() { return { type: USER_ACTION.REQUEST } }
    function success(users) { return { type: USER_ACTION.SUCCESS, payload: { ...users } } }
    function failure(error) { return { type: USER_ACTION.FAILURE, payload: { error } } }
}