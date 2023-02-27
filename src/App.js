import "./App.css";
// import Nav from "./Nav"
import {Home} from "./Views/Home"
import {About} from "./Views/About"
import {Work} from "./Views/Work"
import {Contact} from "./Views/Contact"
import {Footer} from "./Views/Footer.jsx"

function App() {
  return (
    <div className="App">
      <header>
       {/* <Nav/> */}
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
