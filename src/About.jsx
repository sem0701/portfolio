import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 id="about" className="secondary-title">
          My Skills
        </h2>
        <p className="section-paragraph">
          I’ve had the pleasure of working with multiple Fortune 500 companies,
          designing and implementing both frontend and backend.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"></div>
      </section>
    </div>
  );
});

export default About;
