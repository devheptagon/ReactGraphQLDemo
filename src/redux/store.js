import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export let store = null

export default (rootReducer, rootSaga) => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  store = createStore(rootReducer, applyMiddleware(...middleware))
  sagaMiddleware.run(rootSaga)

  return store
}
