import React from "react";
import { motion } from "framer-motion";

import SkillContainer from "../SkillContainer/SkillContainer";
import { fadeIn } from "@/utils/variants";

export interface Skill {
  name: string;
  icon: string;
  url: string;
}

const SkillsList: Skill[] = [
  // Frontend Frameworks & Libraries
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://reactjs.org",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  // Styling & Animation
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    url: "https://tailwindcss.com",
  },
  {
    name: "SCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    url: "https://sass-lang.com",
  },
  {
    name: "Shadcn UI",
    icon: "/icons/shadcn.svg",
    url: "https://ui.shadcn.com",
  },
  {
    name: "Material UI",
    icon: "/icons/mui.svg",
    url: "https://mui.com",
  },
  {
    name: "Ant Design",
    icon: "/icons/antd.svg",
    url: "https://ant.design",
  },
  {
    name: "Mantine",
    icon: "/icons/mantine.svg",
    url: "https://mantine.dev",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    url: "https://motion.dev",
  },
  // State Management & Data Fetching
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    url: "https://redux.js.org",
  },
  {
    name: "Tanstack",
    icon: "/icons/tanstack.svg",
    url: "https://tanstack.com",
  },
  {
    name: "Axios",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg",
    url: "https://axios-http.com",
  },
  // Backend
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    url: "https://dotnet.microsoft.com",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    url: "https://expressjs.com",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    url: "https://www.mongodb.com",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    url: "https://redis.io",
  },
  {
    name: "Cloudinary",
    icon: "/icons/cloudinary.svg",
    url: "https://cloudinary.com",
  },
];

const OtherSkillsList: Skill[] = [
  // API & Testing
  {
    name: "Swagger",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    url: "https://swagger.io",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    url: "https://www.postman.com",
  },
  {
    name: "Playwright",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    url: "https://playwright.dev",
  },
  // DevOps & Deployment
  {
    name: "PM2",
    icon: "/icons/pm2.svg",
    url: "https://pm2.keymetrics.io",
  },
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    url: "https://www.nginx.com",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    url: "https://vercel.com",
  },
  // CMS & Analytics
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    url: "https://wordpress.org",
  },
  {
    name: "Power Pages",
    icon: "/icons/power-pages.svg",
    url: "https://www.microsoft.com/en-us/power-platform/products/power-pages",
  },
  {
    name: "Dataverse",
    icon: "/icons/dataverse.svg",
    url: "https://www.microsoft.com/en-us/power-platform/products/dataverse",
  },
  // Version Control
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    url: "https://git-scm.com",
  },
  {
    name: "Github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com",
  },
  {
    name: "Gitlab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    url: "https://about.gitlab.com",
  },
  // Package Managers
  {
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    url: "https://www.npmjs.com",
  },
  {
    name: "pnpm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg",
    url: "https://pnpm.io",
  },
  {
    name: "yarn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    url: "https://yarnpkg.com",
  },
];

const Skills = () => {
  return (
    <div className="my-skills px-5">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center section-title mb-5 md:text-left"
      >
        <span className="text-primary-color">Technical</span> Skills
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex justify-between md:justify-stretch gap-5 flex-wrap mb-5"
      >
        {SkillsList.map((item) => {
          return (
            <SkillContainer
              key={item.name}
              name={item.name}
              icon={item.icon}
              url={item.url}
            />
          );
        })}
      </motion.div>
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center section-title mb-5 md:text-left"
      >
        <span className="text-primary-color">Others</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex justify-between md:justify-stretch gap-5 flex-wrap mb-5"
      >
        {OtherSkillsList.map((item) => {
          return (
            <SkillContainer
              key={item.name}
              name={item.name}
              icon={item.icon}
              url={item.url}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
