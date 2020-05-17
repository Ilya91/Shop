export const getArticles = () => ({
  type: 'BLOG_ARTICLE_LIST',
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
