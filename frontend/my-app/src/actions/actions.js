export const BLOG_ARTICLE_LIST = 'BLOG_ARTICLE_LIST';
export const BLOG_ARTICLE_LIST_ADD = 'BLOG_ARTICLE_LIST_ADD';

export const blogArticleList = () => ({
  type: BLOG_ARTICLE_LIST,
  data: [
    {
      id: 1,
      title: 'Elon Musk: Tesla worker admitted to sabotage',
      author: 'By Michael Smith',
      image: 'img/bg-img/4.jpg'
    },
    {
      id: 2,
      title: 'Rachel Sm ith breaks down while discussing border crisis',
      author: 'By Michael Smith',
      image: 'img/bg-img/5.jpg'
    }
  ]
})

export const blogArticleAdd = () => ({
  type: BLOG_ARTICLE_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 +3),
    title: 'A newly added article!'
  }
})
