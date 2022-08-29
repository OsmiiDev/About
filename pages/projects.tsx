import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Projects.module.css";
import { ProjectCard } from "../components/ProjectCard";
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import Link from "next/link";


const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title> Osmii </title>
      </Head>

      <div className="float-left p-4 w-full">
        <Link href="/" className="w-3 h-3">
          <a className="flex items-center justify-center w-6 h-6 hover:text-neutral-500 transition-colors">
            <RiHome2Line className="float-left" size={18}/>
          </a>
        </Link>
      </div>

      <h1 className={styles.title}> Some projects I&#39;ve worked on </h1>

      <div className={styles.projectCarousel} id="carousel">
        <ProjectCard
          title="My website"
          type="Website"
          date="2022-08-26"
          description="A simple website built with Next.js, used to showcase projects and other stuff."
          tech={["Next.js", "React", "Tailwindcss", "Typescript"]}
          picture={"/Project_MyWebsite.png"}
          github="https://github.com/OsmiiDev/About"
          link="https://osmii.me"
        />

        <ProjectCard
          title="...And more"
          type="Closed source projects"
          date="2022-08-26"
          description="There are more projects I've worked on that are not listed here, either due to me choosing to not share them or because they are private/closed source."

          tech={["Private"]}
        />
      </div>
    </>
  );
};

export default Projects;
