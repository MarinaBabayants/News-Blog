import {all, call, put, takeEvery} from "redux-saga/effects";
import { setNews, setNewsInfo } from "../../actions/actionCreators";
import { fireBaseAPI } from "../../api/fireBaseAPI";
import {FETCH_NEWS_INFO, FETCH_NEWS_LIST} from "../../actions/actionTypes";

export const fetchNewsSaga = function* () {
    try{
        const response = [];
        const res = yield call(fireBaseAPI.fbGetNews);
        res.forEach (doc => response.push({...doc.data(), id: doc.id}))
        yield put(setNews(response));
    } catch (e) {
    }
}

export const fetchNewsItemSaga = function* (action) {
    const { id } = action
    try{
        const res = yield call(fireBaseAPI.fbGetNewItem, id);
        yield put(setNewsInfo({...res.data(), id: res.id}));
    } catch (e) {
    }
}

export function* saga() {
    yield all([
        takeEvery(FETCH_NEWS_LIST, fetchNewsSaga),
        takeEvery(FETCH_NEWS_INFO, fetchNewsItemSaga)
    ])
}