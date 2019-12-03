import { combineReducers } from "redux";

import allTechs from './allTechReducer'
import validateUser from './validateReducer'
import allUsers from './allUsersReducer'

export default combineReducers({
    allTechs,
    validateUser,
    allUsers
})