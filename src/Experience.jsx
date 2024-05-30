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
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold my-6">
            Software Engineer - Givebacks
          </h3>
          <div>
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
              Actively contributed to consumer and admin-facing platforms,
              scaling from 5,000 to over 230,000 users, demonstrating
              proficiency in building and maintaining high-traffic applications.
            </h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white">
              Built features across multiple repositories using React,
              TypeScript, Tanstack Query, Jotai, Mantine, React Native, and
              other modern frontend technologies, showcasing versatility and
              staying up-to-date with industry trends.{" "}
            </h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white">
              Proficient in refactoring and migrating codebases to leverage
              modern technologies and architectural patterns, including
              transitioning from Redux to Jotai/Context for more efficient state
              management, and from Tailwind CSS/Sass to Mantine UI library for
              enhanced component styling and theming.
            </h3>
          </li>
          <li class="ms-4">
            <div class="absolute w-3 h-3 -left-[6.5px] bg-gray-200 rounded-full mt-1.5  border border-white"></div>
            <h3 class="text-lg font-normal text-gray-100 dark:text-white mb-2">
              Spearheaded the development of an internal API documentation site,
              improving developer experience and collaboration across the team.
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
