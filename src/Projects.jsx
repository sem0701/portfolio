import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="container mt-48 flex justify-between items-center mx-auto px-8 md:pl-20 md:pr-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 id="projects" className="secondary-title">
          Projects
        </h2>

        <div className="space-y-12 my-16">
          {/* JRNLR */}
          <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 className="text-white text-3xl font-semibold mt-4">
                JRNLR - in progress
              </h3>
              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="badge">JavaScript</div>
                <div className="badge">React</div>
                <div className="badge">TailwindCSS</div>
                <div className="badge">React-Query</div>
                <div className="badge">Supabase</div>
              </div>

              <p className="text-secondary">
                Social journaling app for users to write and share their
                thoughts and experiences.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="
                https://jrnlr.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Visit website
                </a>
                <a
                  href="https://jrnlr.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* bendwell */}
          <div className="w-full border border-nav p-16 lg:px-16 lg:py-20 lg:space-x-8 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            <div className="flex flex-col gap-8 mb-6 lg:mb-0 xl:w-10/12">
              <img src="./bendwell.png" alt="bendwell" className="" />
              <img
                src="./bendwell_2.png"
                alt="bendwell"
                className="hidden lg:inline-block "
              />
            </div>

            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block lg:px-10">
              <h3 className="text-white text-3xl font-semibold">bendwell</h3>

              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="badge">JavaScript</div>
                <div className="badge">React</div>
                <div className="badge">Redux</div>
                <div className="badge">Tensorflow</div>
                <div className="badge">Sass</div>
                <div className="badge">Supabase</div>
              </div>

              <p className="text-secondary">
                Health and wellness app utilizing Tensorflow to predict user
                stretches with machine-learned poses.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="
                https://bendwell.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Visit website
                </a>
                <a
                  href="
                  https://github.com/sem0701/capstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* foodie */}
          <div className="w-full border border-nav p-16 lg:px-16 lg:py-20 lg:space-x-8 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
            <div className="flex flex-col gap-8 mb-6 lg:mb-0 xl:w-full">
              <img src="./foodie.png" alt="foodie" className="" />
              <img
                src="./foodie_2.png"
                alt="foodie_2"
                className="hidden lg:inline-block"
              />
            </div>

            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block lg:px-10">
              <h3 className="text-white text-3xl font-semibold">Foodie</h3>

              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="badge">JavaScript</div>
                <div className="badge">Node.js</div>
                <div className="badge">Express</div>
                <div className="badge">Sequelize</div>
                <div className="badge">PostgreSQL</div>
                <div className="badge">React</div>
                <div className="badge">Redux</div>
              </div>

              <p className="text-secondary">
                Full-stack E-commerce app selling food dishes with account
                management, user authentication, and cart functionality.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="
                https://grace-shopper-sam.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Visit website
                </a>
                <a
                  href="
                  https://github.com/sem0701/grace-shopper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Projects;
