import "./App.css";
// import Nav from "./Nav"
import {Home} from "./Views/Home"
import {About} from "./Views/About"
import {Work} from "./Views/Work"

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
      </main>
    </div>
  );
}

export default App;
