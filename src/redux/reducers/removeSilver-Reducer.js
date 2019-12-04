import { REMOVE_SILVER_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    silvers: {},
}

export default function removeSilverBar(state = intialState, action) {

    switch (action.type) {
        case REMOVE_SILVER_ACTION.REQUEST:
            // console.log('action.payload', action.payload)
            return newState(state)

        case REMOVE_SILVER_ACTION.SUCCESS:
            console.log('check silver after remove', action.payload)
            const { silvers } = action.payload;
            return newState(state, { silvers })

        case REMOVE_SILVER_ACTION.FAILURE:
            console.log('action.payload after remove', action.payload.error)
            const { error } = action.payload.error
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}