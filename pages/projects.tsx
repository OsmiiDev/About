import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Projects.module.css";
import { ProjectCard } from "../components/ProjectCard";

let touchStartX: number; let touchEndX: number;
function touchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function touchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  checkDirection();
}

const THRESHOLD = 100;
function checkDirection() {
  if (touchStartX - touchEndX > THRESHOLD) {
    alert("right");
  }
  if (touchStartX - touchEndX < -THRESHOLD) {
    alert("left");
  }
} 

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title> Osmii </title>
      </Head>

      <h1 className={styles.title}> Some projects I&#39;ve worked on </h1>

      <div className={styles.projectCarouselContainer}
        onTouchStart={touchStart} onTouchEnd={touchEnd}>

        <div className={styles.projectCarousel}>
          <ProjectCard
            title="My website"
            type="Website"
            date="2022-08-26"
            description="A simple website built with Next.js, used to showcase projects and other stuff."
            link="https://osmii.me"
            tech={["Next.js", "React", "Tailwindcss", "Typescript"]}
            icon={"/Project_MyWebsite.png"}
          />

          <ProjectCard
            title="My website"
            type="Website"
            date="2022-08-26"
            description="A simple website built with Next.js, used to showcase projects and other stuff."
            link="https://osmii.me"
            tech={["Next.js", "React", "Tailwindcss", "Typescript"]}
            icon={"/Project_MyWebsite.png"}
          />

          <ProjectCard
            title="My website"
            type="Website"
            date="2022-08-26"
            description="A simple website built with Next.js, used to showcase projects and other stuff."
            link="https://osmii.me"
            tech={["Next.js", "React", "Tailwindcss", "Typescript"]}
            icon={"/Project_MyWebsite.png"}
          />

          <ProjectCard
            title="...And more"
            type="Closed source projects"
            date="2022-08-26"
            description="There are more projects I've worked on that are not listed here, either due to me choosing to not share them or because they are private/closed source."
            link="https://osmii.me"
            tech={["Private"]}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
