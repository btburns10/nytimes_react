import React, { Component } from "react";
import "../css/Article.css";
import axios from "axios";

class Article extends Component {

saveArticle = () => {
  const article = {
    title: this.props.article.headline.main,
    summary: this.props.article.snippet,
    img: "http://www.nytimes.com/" + this.props.article.multimedia[14].url,
    date: this.props.article.pub_date,
    link: this.props.article.web_url
  };

  axios.post("/api/articles", article)
      .then(res => console.log("article saved!"))
      .catch(err => console.log(err));
}

render() {
  return(
    <div className="col s12 l4" key={this.props.article._id}>
      <div className="card" data-attr={this.props.article._id} style={{height: 560}}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="image" style={{height: 285}}
            alt={this.props.article.headline.print_headline}
            src={this.props.article.multimedia[14] ? "http://www.nytimes.com/" + this.props.article.multimedia[14].url : "no-image-found.gif"}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" style={{height: 64, overflow: 'hidden'}}>
            {this.props.article.headline.main}
          </span>
          <p style={{height: 110, overflowY: 'scroll', overflowX: 'hidden'}}>
            {this.props.article.snippet}
          </p>
          <p>Published Date: {this.props.article.pub_date}</p>
          <p><a href={this.props.article.web_url} target="_blank" rel="noopener noreferrer">Go to Article</a> 
            <span onClick={this.saveArticle} className="waves-effect waves-light btn circle right #4fc3f7 light-blue lighten-2">
              <i className="small material-icons">add</i>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
  
};

export default Article;