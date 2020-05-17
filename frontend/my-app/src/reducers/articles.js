const articleReducer = (state = [], action) => {
  switch (action.type) {
    case 'BLOG_ARTICLE_LIST':
      return {
        ...state,
        articles: action.data
      };
    default:
      return state
  }
}

export default articleReducer
