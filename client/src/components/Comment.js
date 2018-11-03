import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import axios from "axios";

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: []
    }
  }

  componentDidMount() {
    console.log(this.props.article.note);
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSaveNote = (id) => {
    const note = {body: this.state.note};

    axios.post("/api/articles/" + id, note)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
      <Modal
        header={this.props.article.title}
        fixedFooter
        trigger={<button data-id={this.props.article_id} className="btn primary right">
                  <i className="large material-icons">comment</i>
                </button>}
        actions={
                  <div>
                    {this.props.article.note ? 
                      <Button className="teal" flat modal="close" waves="light" style={{color: "white"}}>Close</Button>
                      :
                      <Button onClick={() => this.handleSaveNote(this.props.article._id)} className="teal" flat modal="close" waves="light" style={{color: "white"}}>Save</Button>
                    }
                  </div>
                }
        >
        {this.props.article.note ? <p>{this.props.article.note.body}</p> :
          <textarea style={{height: 250}}
            onChange={this.handleInputChange}
            value={this.state.note}
            name="note"
            type="text"
            className="form-control"
            placeholder="type notes here"
            id="noteModal"
          /> 
        }
      </Modal>
      </div>
    )
  }

  
};

export default Comment;