import './App.css';
import React from "react";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
