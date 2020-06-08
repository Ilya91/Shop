import {
  BLOG_ARTICLE_CREATE,
  BLOG_ARTICLE_LIST_ERROR,
  BLOG_ARTICLE_LIST_RECEIVED,
  BLOG_ARTICLE_LIST_REQUEST
} from "../actions/articles";

const articleReducer = (state = {
  articles: null,
  isFetching: false,
  pagination: null,
  total: null
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
        articles: action.data['hydra:member'],
        isFetching: false,
        pagination: action.data['hydra:view'],
        total: action.data['hydra:totalItems']
      };
    case BLOG_ARTICLE_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        articles: null,
        pagination: null
      };
    case BLOG_ARTICLE_CREATE:
      return {
        ...state,
        articles: action.data,
        isFetching: false
      };
    default:
      return state
  }
}

export default articleReducer
