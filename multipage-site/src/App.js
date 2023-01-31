import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>My Articles</h1>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
