import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import thunk from "redux-thunk";

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
    ),
  )
  return store
}
