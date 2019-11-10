import React, { Component } from "react";
import Notifications from "./Notifications";
import Postlist from "../projects/Postlist";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8 offset-m1">
            <Postlist />
          </div>
          <div className="col s6 m2 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
