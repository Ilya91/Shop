import {BLOG_ARTICLE_LIST_ERROR, BLOG_ARTICLE_LIST_RECEIVED, BLOG_ARTICLE_LIST_REQUEST} from "../actions/articles";

const articleReducer = (state = {
  articles: null,
  isFetching: false
}, action) => {
  switch (action.type) {
    case BLOG_ARTICLE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case BLOG_ARTICLE_LIST_RECEIVED:
      return {
        ...state,
        articles: action.data,
        isFetching: false
      };
    case BLOG_ARTICLE_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        articles: null
      };
    default:
      return state
  }
}

export default articleReducer
