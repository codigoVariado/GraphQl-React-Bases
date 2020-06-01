import React, {useState} from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      _id
    }
  }
`;

const MessageForm = (props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('')

    const [createMessage] = useMutation(CREATE_MESSAGE);

    const handleSubmit = (e) => {
        e.preventDefault();
        createMessage({variables : {title: title, author: author, content : content}})
        props.history.push('/')
    }   

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  className="form-control"
                  onChange={e => setAuthor(e.target.value)}
                  value={author}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Content...."
                  onChange={e => setContent(e.target.value)}
                  value={content}
                ></textarea>
              </div>
              <button className="btn btn-primary btn-block">
                  Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
