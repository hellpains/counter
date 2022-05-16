import {counterReducer} from "./counter-reducer";
import {combineReducers, legacy_createStore} from "redux";

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = legacy_createStore(rootReducer)

// export type AppStoreType = typeof store
