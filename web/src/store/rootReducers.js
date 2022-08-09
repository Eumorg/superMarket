import { combineReducers } from "redux";
import {inputReduser} from './reducers/inputReducer'

export const rootReducers=combineReducers({
    inputState: inputReduser,
})
