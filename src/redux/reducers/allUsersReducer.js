import { USER_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    users: {},
}

export default function allUsersReducer(state = intialState, action) {

    switch (action.type) {
        case USER_ACTION.REQUEST:
            // console.log('action.payload', action.payload)
            return newState(state)

        case USER_ACTION.SUCCESS:
            console.log('action.payload users', action.payload)
            const { users } = action.payload;
            return newState(state, { users })

        case USER_ACTION.FAILURE:
            console.log('action.payload users', action.payload.error)
            const { error } = action.payload.error
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}