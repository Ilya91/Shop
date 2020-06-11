import React, { Component } from "react";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import {Link} from "react-router-dom";

class ArticleView extends Component {
  render() {
    const { article } = this.props
    console.log(this.props)
    return (
      <div className="col-12 col-sm-6 col-lg-12">
        <Card>
          <CardHeader>
            <span className='float-left'><i className="fa fa-align-justify"></i> List of Articles</span>
            <div className="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl">
              <Link to='articles/add' className="btn btn-primary float-right" role="button">Create Article</Link>
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
              <tr ref={this.setTitleFef}>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Created</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><Link className="post-title">{article.title}</Link></td>
                <td>{article.authorId}</td>
                <td>{article.categoryId}</td>
                <td>{article.createdAt}</td>
              </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default ArticleView;
