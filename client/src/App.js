import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import About from "./pages/About";
//import BPLog from "./pages/BPLog";
import ExerciseLog from "./pages/ExerciseLog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
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
          </Switch>
        </Wrapper>
        { <Footer />}
      </div>
    </Router>
  );
}

export default App;
