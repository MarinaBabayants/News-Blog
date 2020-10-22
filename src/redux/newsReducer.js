import {END_LOADING, SET_NEWS_INFO, SET_NEWS_LIST, START_LOADING} from "../actions/actionTypes";

export const initialState = {
    newsList: [],
    isLoading: false,
    newsInfo: {}
}

export const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEWS_LIST: {
            return {...state, newsList: action.newsList}
        }
        case START_LOADING: {
            return {...state, isLoading: true}
        }
        case END_LOADING: {
            return {...state, isLoading: false}
        }
        case SET_NEWS_INFO: {
            return {...state, newsInfo: {...state.newsInfo, ...action.newsInfo}}
        }
        default:
            return state;
    }

}