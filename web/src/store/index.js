import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducers } from "./rootReducers";



const composeEnhancers = composeWithDevTools(); // импорт reduxDevTools

export const store = createStore(rootReducers, composeEnhancers);
