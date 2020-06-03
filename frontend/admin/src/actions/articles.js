import {requests} from "../agent";

export const BLOG_ARTICLE_LIST_REQUEST = 'BLOG_ARTICLE_LIST_REQUEST'
export const BLOG_ARTICLE_LIST_RECEIVED = 'BLOG_ARTICLE_LIST_RECEIVED'
export const BLOG_ARTICLE_LIST_ERROR = 'BLOG_ARTICLE_LIST_ERROR'
export const getArticles = () => ({
  type: BLOG_ARTICLE_LIST_REQUEST
})

export const listArticlesError = (error) => ({
  type: BLOG_ARTICLE_LIST_ERROR,
  error
})

export const listArticlesReceived = (data) => ({
  type: BLOG_ARTICLE_LIST_RECEIVED,
  data
})



export const blogArticleListFetch = () => {
  return (dispatch) => {
    dispatch(getArticles());
    return requests.get('/articles')
      .then(response => dispatch(listArticlesReceived(response)))
      .catch(error => dispatch(listArticlesError(error)))
  }
}
