import './index.css';
import React from "react";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const style= {
  page: "font-sans-serif"
}

function App() {
  return (
    <div className={style.page}>
      <NavBar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
