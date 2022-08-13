import { combineReducers } from "redux";
import { inputReduser } from './reducers/inputReducer'
import { devicesReducer } from "./reducers/devicesReducer";
import { adminReduser } from './reducers/adminrReduser'
import { reviewsReduser } from "./reducers/reviewsReduser";

export const rootReducers = combineReducers({
    inputState: inputReduser,
    devices: devicesReducer,
    adminState: adminReduser,
    allReviews: reviewsReduser
})
