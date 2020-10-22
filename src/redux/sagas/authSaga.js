import {all, takeEvery, call} from "redux-saga/effects";
import {SIGN_IN_REQUEST, SIGN_UP_REQUEST} from "../../actions/actionTypes";
import {fireBaseAPI} from "../../api/fireBaseAPI";

export const signInSaga = function* (action) {

    const {email, password} = action
    try {
        const res = yield call(fireBaseAPI.fbSignIn, email, password);
        window.localStorage.setItem('UserID', res.user.uid);
        window.location = '/newsPage';
    } catch (error) {
        console.log(error)
     }
}

export const signUpSaga = function* (action) {
    const {email, password} = action
    try {
        const res = yield call(fireBaseAPI.fbSignUp, email, password);
        window.localStorage.setItem('UserID', res.user.uid);
        window.location = '/newsPage';
    } catch (error) {
        console.log(error)
    }
}

export function* saga() {
    yield all([
        takeEvery(SIGN_IN_REQUEST, signInSaga),
        takeEvery(SIGN_UP_REQUEST, signUpSaga),
    ])
}