import { Button } from "./Button";

const Navbar = (props) => {
  const { navOpen, setNavOpen } = props;

  return (
    <header className="App-header fixed top-0 md:static py-8 md:py-5 flex justify-between items-center w-full px-8 md:px-16 z-30 bg-body">
      <div className="text-xl font-bold">Samuel Joh</div>
      <div className="hidden md:flex space-x-12 items-center">
        <a href="#" className="text-selected-text">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">
          <Button>Contact Me</Button>
        </a>
      </div>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => {
          setNavOpen(true);
        }}
      >
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="white"
          />
        </svg>
      </div>

      {/* create a navigation bar that will only be shown on mobile */}
      <div
        className={
          navOpen
            ? "overlay md:hidden top-0 left-0 w-full h-full flex justify-center items-center bg-body z-20 fixed"
            : "hidden"
        }
      >
        <a
          href="javascript:void(0)"
          className="closebtn absolute top-0 right-0 m-4 pr-3 text-6xl hover:text-selected-text hover:ease-in-out duration-150 "
          onClick={() => {
            setNavOpen(false);
          }}
        >
          &times;
        </a>

        <nav className="flex flex-col gap-24 justify-center items-center z-10 text-4xl font-semibold">
          <a
            href="#"
            className="hover:text-selected-text hover:ease-in-out duration-150"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-selected-text hover:ease-in-out duration-150"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-selected-text hover:ease-in-out duration-150"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-selected-text hover:ease-in-out duration-150"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-selected-text hover:ease-in-out duration-150"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
