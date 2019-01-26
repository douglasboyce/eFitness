import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import About from "./pages/About";
import BPLog from "./pages/BPLog";
import ExerciseLog from "./pages/ExerciseLog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
//g  below this added this on 1/12/2019
//import UserSignInSignUp from "./pages/UserSignInSignUp";
import ExerciseLog from "./pages/ExerciseLog";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/exerciseLog" component={ExerciseLog} />
          <Route exact path="/SignUp" component={SignUpForm} />
          <Route exact path="/SignIn" component={SignInForm} />
          </Switch>
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
