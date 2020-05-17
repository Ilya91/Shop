import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import articleReducer from './articles'

const rootReducer = (history) => combineReducers({
  articles: articleReducer,
  router: connectRouter(history)
})

export default rootReducer
