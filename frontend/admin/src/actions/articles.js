import {requests} from "../agent";

export const BLOG_ARTICLE_LIST_REQUEST = 'BLOG_ARTICLE_LIST_REQUEST'
export const BLOG_ARTICLE_LIST_RECEIVED = 'BLOG_ARTICLE_LIST_RECEIVED'
export const BLOG_ARTICLE_LIST_ERROR = 'BLOG_ARTICLE_LIST_ERROR'
export const BLOG_ARTICLE_CREATE = 'BLOG_ARTICLE_CREATE'
export const BLOG_ARTICLE_LIST_SET_PAGE = 'BLOG_ARTICLE_LIST_SET_PAGE'
export const BLOG_ARTICLE_ITEM_REQUEST = 'BLOG_ARTICLE_ITEM_REQUEST'
export const BLOG_ARTICLE_ITEM_RECEIVED = 'BLOG_ARTICLE_ITEM_RECEIVED'
export const BLOG_ARTICLE_ITEM_ERROR = 'BLOG_ARTICLE_ITEM_ERROR'

export const getArticles = () => ({
  type: BLOG_ARTICLE_LIST_REQUEST
})

export const getArticle = () => ({
  type: BLOG_ARTICLE_ITEM_REQUEST
})

export const addArticle = () => ({
  type: BLOG_ARTICLE_CREATE
})

export const listArticlesError = (error) => ({
  type: BLOG_ARTICLE_LIST_ERROR,
  error
})

export const articleError = (error) => ({
  type: BLOG_ARTICLE_ITEM_ERROR,
  error
})

export const listArticlesReceived = (data) => ({
  type: BLOG_ARTICLE_LIST_RECEIVED,
  data
})
export const articleReceived = (data) => ({
  type: BLOG_ARTICLE_ITEM_RECEIVED,
  data
})

export const listArticlesSetPage = (page) => ({
  type: BLOG_ARTICLE_LIST_SET_PAGE,
  page
})

export const createNewArticle = (title, authorId, categoryId = 1, description) => {
  console.log(title, description, authorId);
  return (dispatch) => {
    return requests.post('/articles', { title, authorId, categoryId, description})
      .then(response => dispatch(addArticle(response)))
      .catch(error => console.log(error))
  }
}


export const blogArticleListFetch = (page = 1) => {
  return (dispatch) => {
    dispatch(getArticles());
    return requests.get(`/articles?page=${page}`)
      .then(response => dispatch(listArticlesReceived(response)))
      .catch(error => dispatch(listArticlesError(error)))
  }
}

export const blogArticleItemFetch = (id) => {
  return (dispatch) => {
    dispatch(getArticle());
    return requests.get(`/articles/${id}`)
      .then(response => dispatch(articleReceived(response)))
      .catch(error => dispatch(articleError(error)))
  }
}
