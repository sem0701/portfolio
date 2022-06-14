import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const App = () => {
  const [selected, setSelected] = useState("home");
  const [homeRef, homeInView] = useInView({
    threshold: 0.5,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.25,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="App bg-body text-white font-poppins pb-12">
      {/* navbar */}
      <Navbar setSelected={setSelected} />

      {/* home */}
      <Home
        ref={homeRef}
        homeInView={homeInView}
        aboutInView={aboutInView}
        projectsInView={projectsInView}
        contactInView={contactInView}
        selected={selected}
        setSelected={setSelected}
      />

      {/* about */}
      <About ref={aboutRef} inView={aboutInView} />

      {/* projects */}
      <Projects ref={projectsRef} inView={projectsInView} />

      {/* contact */}
      <Contact ref={contactRef} inView={contactInView} />

      {/* footer */}
    </div>
  );
};

export default App;
