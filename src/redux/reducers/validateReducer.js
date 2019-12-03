import { VALIDATE_USER_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    user: {},
}

export default function validateUser(state = intialState, action) {

    switch (action.type) {
        case VALIDATE_USER_ACTION.REQUEST:
            console.log('action.payload', action.payload)
            return newState(state)

        case VALIDATE_USER_ACTION.SUCCESS:
            console.log('action.payload', action.payload)
            const { isValidUser } = action.payload;
            return newState(state, { isValidUser })

        case VALIDATE_USER_ACTION.FAILURE:
            console.log('action.payload', action.payload.error)
            const { error } = action.payload.error
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}