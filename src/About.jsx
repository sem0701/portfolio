import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  const skills = [
    {
      icon: "typescript-plain",
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: "javascript-plain",
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { icon: "react-plain", name: "React", link: "https://reactjs.org/" },
    {
      image: "./tanstackQueryLogo.svg",
      name: "Tanstack Query",
      link: "https://tanstack.com/query",
    },
    {
      icon: "html5-plain",
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
      icon: "css3-plain",
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: "tailwindcss-plain",
      name: "TailwindCSS",
      link: "https://tailwindcss.com/",
    },
    { icon: "sass-plain", name: "SASS", link: "https://sass-lang.com/" },
    {
      icon: "storybook-plain",
      name: "Storybook",
      link: "https://storybook.js.org/",
    },
    { icon: "git-plain", name: "Git", link: "https://git-scm.com/" },
    { icon: "redux-plain", name: "Redux", link: "https://redux.js.org/" },
    { icon: "nodejs-plain", name: "NodeJS", link: "https://nodejs.org/en/" },
    {
      icon: "express-original",
      name: "Express",
      link: "https://expressjs.com/",
    },
    {
      icon: "sequelize-plain",
      name: "Sequelize",
      link: "https://sequelize.org/",
    },
    {
      icon: "postgresql-plain",
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
    },
    {
      image: "./supabase_logo.png",
      name: "Supabase",
      link: "https://supabase.io/",
    },
    {
      icon: "tensorflow-original",
      name: "TensorFlow",
      link: "https://www.tensorflow.org/",
    },
  ];
  //skills with links

  return (
    <div
      ref={ref}
      className="container mt-24  flex justify-between items-center mx-auto px-8 md:px-16 lg:px-24  w-full"
    >
      <section className="w-full">
        <h2 id="about" className="secondary-title mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-auto-rows minmax(300px, auto) gap-8">
          {skills.map(({ icon, name, image, link }) => (
            <div key={name} className="flex items-center w-full">
              <a href={link} target="_blank">
                {image ? (
                  <div className="flex flex-col gap-2 justify-center items-center border border-nav p-8 pb-0 w-full">
                    <img src={image} alt={name} className="w-24 h-24" />
                    <p className="text-center h-12 w-24">{name}</p>
                  </div>
                ) : icon ? (
                  <div className="flex flex-col gap-2 justify-center items-center border border-nav p-8 pb-0 w-full">
                    <i className={`devicon-${icon} text-8xl`}></i>
                    <p className="text-center h-12">{name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col h-48 gap-2 justify-center items-center border border-nav p-8 pb-0 w-full">
                    <p className="text-center h-12">{name}</p>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default About;
