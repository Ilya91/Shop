import {
  BLOG_ARTICLE_ITEM_RECEIVED,
  BLOG_ARTICLE_ITEM_REQUEST,
} from "../actions/articles";

const articleItemReducer = (state = {
  article: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case BLOG_ARTICLE_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case BLOG_ARTICLE_ITEM_RECEIVED:
      return {
        ...state,
        article: action.data,
        isFetching: false
      };
    default:
      return state
  }
}

export default articleItemReducer
