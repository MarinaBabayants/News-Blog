import {combineReducers} from "redux";
import {newsReducer} from "./newsReducer";
import {connectRouter} from "connected-react-router";

export const rootReducer = (history) => combineReducers({
    news: newsReducer,
    router: connectRouter(history),
    }
)
