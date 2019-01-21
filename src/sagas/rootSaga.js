import { all } from 'redux-saga/effects'
import { appSagas } from './appSagas'

export function* rootSaga() {
    yield all([
      appSagas()
    ])
}