import { useState } from "react";
import { useInView } from "react-intersection-observer";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [homeRef, homeInView] = useInView({
    threshold: 0.5,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
  });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.5,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.3,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="App bg-body text-white font-poppins pb-12">
      {/* navbar */}
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />

      <div className="flex flex-col gap-24 md:gap-48 ">
        {/* home */}
        <Home
          ref={homeRef}
          homeInView={homeInView}
          aboutInView={aboutInView}
          experienceInView={experienceInView}
          projectsInView={projectsInView}
          contactInView={contactInView}
        />

        {/* about */}
        <About ref={aboutRef} inView={aboutInView} />

        {/* experience */}
        <Experience ref={experienceRef} inView={experienceInView} />

        {/* projects */}
        <Projects ref={projectsRef} inView={projectsInView} />

        {/* contact */}
        <Contact ref={contactRef} inView={contactInView} />
      </div>
    </div>
  );
};

export default App;
