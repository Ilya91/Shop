import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import articles from "../reducers/articles";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  articles
})
export default createRootReducer
