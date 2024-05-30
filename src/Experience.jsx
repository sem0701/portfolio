import React, { forwardRef } from "react";
import { Button, ButtonOutline } from "./Button";

const Experience = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="container flex justify-between items-center mx-auto px-8 md:pl-20 md:pr-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 id="experience" className="secondary-title">
          Experience
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h3 className="text-3xl font-semibold my-6">
            Software Engineer - Givebacks
          </h3>
          <div className="mb-6 md:mb-0">
            <Button>
              <a href="https://givebacks.com/" target="_blank">
                Visit site
              </a>
            </Button>
          </div>
        </div>

        <ol class="relative border-l border-gray-200 px-6 py-4">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white">
              Actively <strong>contributed</strong> to consumer and admin-facing
              platforms, <strong>scaling</strong> from &lt;5,000 to over 230,000
              users, demonstrating <strong>proficiency in building</strong> and{" "}
              <strong>maintaining high-traffic</strong> applications.
            </h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white">
              <strong>Built features</strong> across multiple repositories using{" "}
              <strong>
                React, TypeScript, Tanstack Query, Jotai, Mantine, React Native,
              </strong>{" "}
              and other modern frontend technologies, showcasing{" "}
              <strong>versatility</strong> and{" "}
              <strong>staying up-to-date with industry trends.</strong>{" "}
            </h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white">
              <strong>Proficient</strong> in{" "}
              <strong>refactoring and migrating</strong> codebases to leverage
              modern technologies and architectural patterns, including
              transitioning from <strong>Redux to Jotai/Context</strong> for
              more <strong>efficient state management</strong>, and from{" "}
              <strong>Tailwind CSS/Sass to Mantine UI library</strong> for
              enhanced <strong>component styling and theming.</strong>
            </h3>
          </li>
          <li class="ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white mb-2">
              <strong> Spearheaded the development</strong> of an internal API
              documentation site with{" "}
              <strong>Tanstack Router and Mantine</strong>,{" "}
              <strong>improving developer experience</strong> and collaboration
              across the team.
            </h3>
            <ButtonOutline size="sm">
              <a
                href="http://docs.givebacks.dev.s3-website-us-east-1.amazonaws.com/api"
                target="_blank"
              >
                View API site
              </a>
            </ButtonOutline>
          </li>
        </ol>
      </section>
    </div>
  );
});

export default Experience;
