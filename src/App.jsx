import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState("home");
  return (
    <div className="App bg-body text-white font-poppins pb-12">
      {/* navbar */}
      <Navbar setSelected={setSelected} />

      {/* home */}
      <Home selected={selected} setSelected={setSelected} />

      {/* about */}
      <About />

      {/* projects */}
      <Projects />

      {/* contact */}
      <Contact />

      {/* footer */}
    </div>
  );
};

export default App;
