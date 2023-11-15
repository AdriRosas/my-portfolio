import React from 'react'
import "../src/App.css";
import "../src/components/styles/Normalize.css"
// import Nav from "./Nav"
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer.jsx";
// import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header>
        {/* <Nav /> */}
      </header>
      <main>
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
