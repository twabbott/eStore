import { combineReducers } from "redux";

import appStateReducer from "./appStateReducer";
import studentReducer from "./studentReducer";

// Combine all reducers here into one glorious über-reducer!
const rootReducer = combineReducers({
    appState: appStateReducer,
    students: studentReducer
});

export default rootReducer;
