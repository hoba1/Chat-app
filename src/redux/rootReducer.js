import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/App"

// slices

const rootPeristConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    // whiteList [],
    // BlackList [],
}

const rootReducer = combineReducers({
    app: appReducer,
})

export {rootPeristConfig, rootReducer}