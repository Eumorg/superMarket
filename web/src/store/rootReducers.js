import { combineReducers } from "redux";
import {inputReduser} from './reducers/inputReducer'
import { devicesReducer } from "./reducers/devicesReducer";
import {adminReduser} from './reducers/adminrReduser'

export const rootReducers = combineReducers({
    inputState: inputReduser, 
    devices: devicesReducer,
    adminState: adminReduser,
})
