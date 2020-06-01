import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/cerulean/bootstrap.min.css";

import NavBar from "./components/Navbar";
import MessageList from "./components/Messagelist";
import MessageForm from "./components/MessageForm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <div className="container p-4">
            <Route exact path="/" component={MessageList} />
            <Route exact path="/new-message" component={MessageForm} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
