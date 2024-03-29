import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/projects/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/projects/CreatePost";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/post/:id" component={PostDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createpost" component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
