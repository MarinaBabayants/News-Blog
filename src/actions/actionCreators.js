import {
    SIGN_IN_REQUEST,
    SIGN_UP_REQUEST,
    FETCH_NEWS_LIST,
    SET_NEWS_LIST,
    SET_NEWS_INFO,
    FETCH_NEWS_INFO
} from "./actionTypes";

export const signIn = (email, password) => ({type: SIGN_IN_REQUEST, email, password });
export const signUp = (email, password) => ({type: SIGN_UP_REQUEST, email, password });

export const fetchNews = () => ({type: FETCH_NEWS_LIST});
export const setNews = (newsList) => ({type: SET_NEWS_LIST, newsList});

export const fetchNewsInfo = (id) => ({type: FETCH_NEWS_INFO, id});
export const setNewsInfo = (newsInfo) => ({type: SET_NEWS_INFO, newsInfo});



