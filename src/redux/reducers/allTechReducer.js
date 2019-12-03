import { ALL_TECH_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    techs: {},
    isLoading: false
}

export default function allTechReducer(state = intialState, action) {

    switch (action.type) {
        case ALL_TECH_ACTION.REQUEST:
            return newState(state, { isLoading: true })

        case ALL_TECH_ACTION.SUCCESS:
            // console.log('action.payload', action.payload)
            const { techs } = action.payload;
            return newState(state, { techs, isLoading: false })

        case ALL_TECH_ACTION.FAILURE:
            const { error } = action.payload
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}