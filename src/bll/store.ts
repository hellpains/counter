import {counterReducer} from "./counter-reducer";
import { combineReducers, createStore} from "redux";
import {loadState, saveState} from "../utils/localstorage-utils";

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    counter: counterReducer
})



export const store = createStore(rootReducer, loadState())

export type AppStoreType = typeof store


store.subscribe(() => {
    saveState({counter:store.getState().counter})
})