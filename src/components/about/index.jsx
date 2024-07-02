import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          👋 Greetings! I'm Diksha Jaiswal , a coder at heart with a deep passion for Data Structures and Algorithms (DSA) powered by C++. In addition to my coding expertise, I bring a creative edge to the digital landscape with my web design skills and frontend development.

🖥️ My journey began with a fascination for problem-solving and a love for the intricacies of DSA. Over the time, I've honed my skills in C++ to create efficient and elegant solutions to complex computational challenges. From optimizing algorithms to building robust systems, I thrive on the logic and precision that coding demands.

🌐 Beyond my coding prowess, I have another side to my digital persona—I'm a web designer, frontend and backend developer. I believe that great code deserves an equally great user interface. My skills in web design and development enable me to bring a sense of aesthetics and user-friendliness to the software I create.

🚀 My mission is to continue pushing the boundaries of what's possible in coding and web design and development. Whether I'm optimizing algorithms or perfecting the user experience, I'm driven by a desire to create digital solutions that leave a lasting impact.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            20+ <sub className="font-semibold text-base">skills</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
           // src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
           src="https://github-readme-stats.vercel.app/api/top-langs/?username=dikshajaiswal855&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="DikshaJaiswal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            //src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            src="https://github-readme-stats.vercel.app/api?username=dikshajaiswal855&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,figma,git,github,html,js,jquery,mongodb,mysql,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode,python`}
            alt="diskhajaiswal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p=0"}>
          {/* <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          /> */}
          <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=dikshajaiswal855&theme=dark&hide_border=true&type=png&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5B" alt="GitHub Streak" /></a>
        </ItemLayout>

        
        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/dikshajaiswal855/glamgait"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=dikshajaiswal855&repo=glamgait&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;