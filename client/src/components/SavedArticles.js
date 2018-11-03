import React, { Component } from "react";
import SavedArticle from "./SavedArticle";
import axios from "axios";

class SavedArticles extends Component {

 state = {
   articles: []
 }

componentDidMount() {
  axios.get("/api/articles")
    .then(res => {
      console.log(res)
      this.setState({ articles: res.data })
    })
    .catch(err => console.log(err))
}

render() {
  console.log(this.state.articles);
  return(
    <div className="container">
      {this.state.articles.length > 0 && this.state.articles.map(article => {
          return <SavedArticle key={article._id} article={article} />
      })}
    </div>
  )
}
  
};

export default SavedArticles;