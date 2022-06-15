import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  const skills = [
    { icon: "html5-plain", name: "HTML5" },
    { icon: "css3-plain", name: "CSS3" },
    { icon: "sass-plain", name: "SASS" },
    { icon: "javascript-plain", name: "JavaScript" },
    { icon: "react-plain", name: "React" },
    { icon: "redux-plain", name: "Redux" },
    { icon: "nodejs-plain", name: "NodeJS" },
    { icon: "express-original", name: "Express" },
    { icon: "sequelize-plain", name: "Sequelize" },
    { icon: "typescript-plain", name: "TypeScript" },
    { icon: "postgresql-plain", name: "PostgreSQL" },
    { image: "./supabase_logo.png", name: "Supabase" },
    { icon: "tensorflow-original", name: "TensorFlow" },
    { name: "React-Query" },
    { icon: "tailwindcss-plain", name: "TailwindCSS" },
  ];
  //skills with links

  return (
    <div
      ref={ref}
      className="container mt-80 md:mt-64 lg:mt-80 flex justify-between items-center mx-auto px-8 md:px-16 lg:px-24  w-full"
    >
      <section className="w-full">
        <h2 id="about" className="secondary-title mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {skills.map(({ icon, name, image }) => (
            <div key={name} className="flex items-center w-full">
              {image ? (
                <div className="flex flex-col gap-2 justify-center items-center border border-nav p-8 w-full">
                  <img src={image} alt={name} className="w-24 h-24" />
                  <p className="text-center">{name}</p>
                </div>
              ) : icon ? (
                <div className="flex flex-col gap-2 justify-center items-center border border-nav p-8 w-full">
                  <i className={`devicon-${icon} text-8xl`}></i>
                  <p className="text-center">{name}</p>
                </div>
              ) : (
                <div className="flex flex-col h-48 gap-2 justify-center items-center border border-nav p-8 w-full">
                  <p className="text-center">{name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default About;
