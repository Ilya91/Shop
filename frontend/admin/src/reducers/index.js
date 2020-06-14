import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import articleReducer from './articles'
import { reducer as formReducer} from "redux-form";
import articleItemReducer from "./article";

const rootReducer = (history) => combineReducers({
  articles: articleReducer,
  article: articleItemReducer,
  form: formReducer,
  router: connectRouter(history)
})

export default rootReducer
