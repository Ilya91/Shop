import React from "react";
import {Link} from "react-router-dom";
import ArticleView from "./ArticleView";

const ArticleItem = (props) => {
  return (
    <tr key={props.article.id}>
    <td><Link to={`/article/${props.article.id}`} className="post-title" article={props.article}>{props.article.title}</Link></td>
    <td>{props.article.authorId}</td>
    <td>{props.article.categoryId}</td>
    <td>{props.article.createdAt}</td>
  </tr>)
};
export default ArticleItem;
