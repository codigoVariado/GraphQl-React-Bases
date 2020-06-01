import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    pollInterval: 1000,
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data.messages.map(({ _id, title, content, author }) => (
          <div key={_id} className="card m-2">
              <div className="card-body">
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{author}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
