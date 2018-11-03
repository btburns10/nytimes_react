import React from "react";
import Comment from "./Comment";
import "../css/SavedArticle.css";


const SavedArticle = props => (

<div className="col s12 m12 l8">
  <div className="card horizontal">
    <div className="card-image">
      <img src={props.article.img} alt={props.article.title} style={{height: 250, width: 300, padding: 10}}/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <h5 className="header">{props.article.title}</h5>
        <hr></hr>
        <p>{props.article.summary}</p>
      </div>
      <div className="card-action">
        <a href={props.article.link} target="_blank" rel="noopener noreferrer">Read more here</a>
        <Comment article={props.article}/>
      </div>
    </div>
  </div>
</div>
  
);

export default SavedArticle;
