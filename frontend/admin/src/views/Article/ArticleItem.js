import React from "react";

const ArticleItem = (props) => {
  return (
    <tr key={props.article.id}>
    <td><a href="/" className="post-title">{props.article.title}</a></td>
    <td>{props.article.authorId}</td>
    <td>{props.article.categoryId}</td>
    <td>{props.article.createdAt}</td>
  </tr>)
};
export default ArticleItem;
