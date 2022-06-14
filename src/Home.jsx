import { forwardRef } from "react";
import Button from "./Button";

const Home = forwardRef((props, ref) => {
  const homeInView = props.homeInView;
  const aboutInView = props.aboutInView;
  const projectsInView = props.projectsInView;
  const contactInView = props.contactInView;

  return (
    <div
      ref={ref}
      className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <div className="flex flex-wrap md:flex-nowrap z-10">
        {/* nav buttons */}
        <nav className="lg:mr-24 lg:w-4 fixed left-12 hidden md:block  ">
          <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
            <a
              href="#"
              className={
                homeInView
                  ? "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body selected-circle"
                  : "nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
              }
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
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
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                Work
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
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                Clients
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
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                Hire
              </span>
            </a>
          </div>
        </nav>

        {/* content */}
        <div className="flex flex-wrap md:ml-20 justify-center md:justify-start max-w-xl mt-32 md:mt-24">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-left ">
            Hi, I'm Sam.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-left mt-4 mb-8">
            I'm a full-stack developer with a passion for building beautiful
            things.
          </h2>
          {/* <div className="w-full flex justify-center md:justify-start"> */}
          <Button>View My Work</Button>
          {/* </div> */}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1600509697603-64b5edf46c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt=""
        className="absolute right-0 bottom-0 w-full md:w-1/2 h-[calc(100%_-_88px)] object-cover brightness-50 hue-rotate-30 "
      />
    </div>
  );
});

export default Home;
