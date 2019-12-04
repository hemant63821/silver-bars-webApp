import { GET_ALL_SILVER_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    silverData: [],
}

export default function allSilverBarReducer(state = intialState, action) {

    switch (action.type) {
        case GET_ALL_SILVER_ACTION.REQUEST:
            // console.log('action.payload', action.payload)
            return newState(state)

        case GET_ALL_SILVER_ACTION.SUCCESS:
            console.log('action.payload', action.payload)
            const { silverData } = action.payload;
            return newState(state, { silverData })

        case GET_ALL_SILVER_ACTION.FAILURE:
            console.log('action.payload users', action.payload.error)
            const { error } = action.payload.error
            return newState(state, { error, ...intialState })

        case GET_ALL_SILVER_ACTION.REMOVE:
            const { id, silverData: silvers } = action.payload
            const newSilverData = silvers.filter(itr => itr.id !== id)
            return newState(state, { silverData: newSilverData })

        default:
            return state;
    }
}