import { forwardRef } from "react";
import { Button, ButtonOutline } from "./Button";

const Home = forwardRef((props, ref) => {
  const homeInView = props.homeInView;
  const aboutInView = props.aboutInView;
  const experienceInView = props.experienceInView;
  const projectsInView = props.projectsInView;
  const contactInView = props.contactInView;

  return (
    <div
      ref={ref}
      className="container mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <div className="flex flex-wrap md:flex-nowrap z-10">
        {/* nav buttons */}
        <nav className="lg:mr-24 lg:w-4 fixed left-12 hidden md:block  ">
          <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-6">
            <a
              href="#"
              className={
                homeInView
                  ? "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body selected-circle"
                  : "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
              }
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 transition-opacity">
                Home
              </span>
            </a>
            <a
              href="#about"
              className={
                aboutInView
                  ? "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body selected-circle"
                  : "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
              }
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 transition-opacity">
                About
              </span>
            </a>
            <a
              href="#experience"
              className={
                experienceInView
                  ? "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body selected-circle"
                  : "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
              }
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 transition-opacity">
                Experience
              </span>
            </a>
            <a
              href="#projects"
              className={
                projectsInView
                  ? "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body selected-circle"
                  : "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
              }
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 transition-opacity">
                Projects
              </span>
            </a>
            <a
              href="#contact"
              className={
                contactInView
                  ? "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body selected-circle"
                  : "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
              }
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 transition-opacity">
                Contact
              </span>
            </a>
          </div>
        </nav>

        {/* content */}
        <div className="flex flex-wrap md:ml-20 justify-center md:justify-start max-w-xl my-32 md:mt-0">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-left ">
            Hi, I'm Sam.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-4xl text-center md:text-left mt-4 mb-8">
            I'm a frontend developer with a passion for tech, audio, and
            everything in between.
          </h2>
          <div
            className="
          flex flex-wrap justify-center md:justify-start gap-4
          "
          >
            <a href="#experience">
              <Button>View my work</Button>
            </a>
            <ButtonOutline>
              <a href="/resume.pdf" download>
                Download my resume
              </a>
            </ButtonOutline>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1568993703320-07e80bc8e7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        className="absolute right-0  w-full md:w-1/2 h-[calc(100%_-_88px)] max-h-[800px] md:bottom-auto object-cover brightness-50 hue-rotate-30 "
      />
    </div>
  );
});

export default Home;
