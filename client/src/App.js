import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
//g  below this added this on 1/12/2019
//import SigninForm from "./UserinPut/SignInForm";
//import SignUpForm from "./UserinPut/SignInForm";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard}/>
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
