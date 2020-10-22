import { all } from 'redux-saga/effects'
import { saga as authSaga } from './authSaga'
import { saga as newsSaga } from './newsSaga'

export default function* rootSaga() {
    yield all([authSaga(), newsSaga()])
}