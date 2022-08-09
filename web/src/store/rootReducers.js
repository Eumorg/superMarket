import { combineReducers } from "redux";
import {inputReduser} from './reducers/inputReducer'
import { devicesReducer } from "./reducers/devicesReducer";

export const rootReducers = combineReducers({
    inputState: inputReduser, 
    devices: devicesReducer,
})
