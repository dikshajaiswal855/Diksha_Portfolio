import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";
import prof from "../../../public/Dikshadiksha1.jpg"

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
          👋 Greetings! I&apos;m Diksha Jaiswal, a coder at heart with a deep passion for Data Structures and Algorithms (DSA) powered by C++. In addition to my coding expertise, I bring a creative edge to the digital landscape with my web design skills and frontend development.

🖥️ My journey began with a fascination for problem-solving and a love for the intricacies of DSA. Over the time, I&apos;ve honed my skills in C++ to create efficient and elegant solutions to complex computational challenges. From optimizing algorithms to building robust systems, I thrive on the logic and precision that coding demands.

🌐 Beyond my coding prowess, I have another side to my digital persona—I&apos;m a web designer, frontend and backend developer. I believe that great code deserves an equally great user interface. My skills in web design and development enable me to bring a sense of aesthetics and user-friendliness to the software I create.

🚀 My mission is to continue pushing the boundaries of what&apos;s possible in coding and web design and development. Whether I&apos;m optimizing algorithms or perfecting the user experience, I&apos;m driven by a desire to create digital solutions that leave a lasting impact.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <Image className="w-full rounded-xl" src={prof} alt="Profile Picture"  layout="responsive"  />
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            20+ <sub className="font-semibold text-base">skills</sub>
          </p>
          {/* <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p> */}
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
           src="https://github-readme-stats.vercel.app/api/top-langs/?username=dikshajaiswal855&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="DikshaJaiswal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=dikshajaiswal855&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,cpp,html,css,js,bootstrap,git,github,mongodb,mysql,postman,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,firebase,vscode,python`}
            alt="diskhajaiswal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p=0"}>
         
        <img src="https://github-readme-streak-stats.herokuapp.com?user=dikshajaiswal855&theme=dark&hide_border=true&type=png&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5B" alt="GitHub Streak" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p=0"}>
         
        <img align="center" src="https://leetcard.jacoblin.cool/Diksha_Jaiswal?ext=heatmap&" alt="dikshajaiswal" />
        </ItemLayout>
        
      </div>
    </section>
  );
};

export default AboutDetails;

