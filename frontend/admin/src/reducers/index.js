import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import articleReducer from './articles'
import { reducer as formReducer} from "redux-form";

const rootReducer = (history) => combineReducers({
  articles: articleReducer,
  form: formReducer,
  router: connectRouter(history)
})

export default rootReducer
