import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
//pass the name/date as props to the child to render
const avatar = faker.image.avatar();

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Alex" timeAgo="Today at 12:00" content="A" />
      <CommentDetail author="Jane" timeAgo="Today at 16:00" content="B" />
      <CommentDetail author="Sam" timeAgo="Today at 18:00" content="C" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
