import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ApplyForProgram from "./components/pages/apply_for_program/apply_for_program";
import ContactUs from "./components/pages/contact_us/contact_us";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Profile from "./components/pages/profile/profile";
import ReceiveTasks from "./components/pages/receive_tasks/receive_tasks";
import Register from "./components/pages/register/register";
import SendTasks from "./components/pages/send_tasks/send_tasks";
import TaskSent from "./components/pages/task_sent/task_sent";

import Navbar from "./components/layout/navbar/navbar";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + "/register"} component={Register} />
          <Route exact path={process.env.PUBLIC_URL + "/apply-for-program"} component={ApplyForProgram} />
          <Route exact path={process.env.PUBLIC_URL + "/profile"} component={Profile} />
          <Route exact path={process.env.PUBLIC_URL + "/receive-answers"} component={ReceiveTasks} />
          <Route exact path={process.env.PUBLIC_URL + "/send-tasks"} component={SendTasks} />
          <Route exact path={process.env.PUBLIC_URL + "/contact-us"} component={ContactUs} />
          <Route exact path={process.env.PUBLIC_URL + "/task-sent"} component={TaskSent} />
        </div>
      </Router>
    );
  }
}

export default App;
