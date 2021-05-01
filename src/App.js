import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects'; //project cards listed out in Project component

//components to import
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactForm from "./components/Contact";
import Project from "./components/Project";




function App() {

  return (
    <Router>
    <div>
      <Navigation />
      <main>
        {/* <Route path="/skills" component={Skills}/> */}
        <Route path="/contact" component={ContactForm}/>
         <Route path="/projects" component={Projects}/>
         <Route path="/" component={Home}/>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
