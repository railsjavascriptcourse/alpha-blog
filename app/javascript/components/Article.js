import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className="article-title">
        <a href={this.props.path}>{this.props.title}</a>
      </div>
      <div className='article-body'>
        {this.props.description}
        <div className="article-meta-details">
          <small>Created by: {this.props.author}, {this.props.created_at} ago,
                last updated: {this.props.updated_at} ago</small>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
};
export default Article
