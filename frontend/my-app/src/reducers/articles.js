import {BLOG_ARTICLE_LIST, BLOG_ARTICLE_LIST_ADD} from "../actions/actions";

export default ( state = {
  articles: null
}, action) => {
  switch (action.type) {
    case BLOG_ARTICLE_LIST:
      return {
        ...state,
        articles: action.data
      };
    case BLOG_ARTICLE_LIST_ADD:
      return {
        ...state,
        articles: state.articles ? state.articles.concat(action.data) : state.articles
      };
    default:
      return state;
  }
}
