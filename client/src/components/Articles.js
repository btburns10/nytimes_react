import React from "react";
import Article from "./Article";
import "../css/Articles.css";

const Articles = props => (

<div className="row">
  
  {props.articles.map(article => {
    return <Article key={article._id} article={article} />
  })}
  
</div>
  
);

export default Articles;

