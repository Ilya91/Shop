import {requests} from "../agent";

export const BLOG_ARTICLE_LIST_REQUEST = 'BLOG_ARTICLE_LIST_REQUEST'
export const BLOG_ARTICLE_LIST_RECEIVED = 'BLOG_ARTICLE_LIST_RECEIVED'
export const BLOG_ARTICLE_LIST_ERROR = 'BLOG_ARTICLE_LIST_ERROR'
export const BLOG_ARTICLE_CREATE = 'BLOG_ARTICLE_CREATE'
export const getArticles = () => ({
  type: BLOG_ARTICLE_LIST_REQUEST
})

export const addArticle = () => ({
  type: BLOG_ARTICLE_CREATE
})

export const listArticlesError = (error) => ({
  type: BLOG_ARTICLE_LIST_ERROR,
  error
})

export const listArticlesReceived = (data) => ({
  type: BLOG_ARTICLE_LIST_RECEIVED,
  data
})

export const createNewArticle = (title, description, author) => {
  return (dispatch) => {
    return requests.post('/articles', { title, description, author })
      .then(response => dispatch(listArticlesReceived(response)))
      .catch(error => console.log(error))
  }
}


export const blogArticleListFetch = () => {
  return (dispatch) => {
    dispatch(getArticles());
    return requests.get('/articles')
      .then(response => dispatch(addArticle(response)))
      .catch(error => dispatch(listArticlesError(error)))
  }
}
