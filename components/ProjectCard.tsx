import styles from "../styles/ProjectCard.module.css";
import { SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { AiFillLock } from "react-icons/ai";

import React from "react";
import Image from "next/future/image";
import { RiExternalLinkLine, RiInformationLine } from "react-icons/ri";
export type ProjectCardProps = {
  title: string;
  type: string;
  date: string;

  description: string;

  tech: string[];

  picture?: string;
  link?: string;
  github?: string;
}

const techIcons: {[key: string]: React.ReactNode} = {
  "Private": <AiFillLock size={27} color="#cccccc"/>,
  "React": <SiReact size={25} color="#5865F2" className={styles.icon}/>,
  "Next.js": <SiNextdotjs size={25} color="#5865F2" className={styles.icon}/>,
  "Tailwindcss": <SiTailwindcss size={25} color="#5865F2" className={styles.icon}/>,
  "Typescript": <SiTypescript size={25} color="#5865F2" className={styles.icon}/>,
  "HTML": <SiHtml5 size={25} color="#5865F2" className={styles.icon}/>,
  "Javascript": <SiJavascript size={25} color="#5865F2" className={styles.icon}/>,
  "Node.js": <SiNodedotjs size={25} color="#5865F2" className={styles.icon}/>,

};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, type, date, description, tech, picture, link, github }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className="w-full pt-4 h-13 flex items-center justify-between">
        <h2 className={styles.title}> {title} </h2>
        <div className="flex pr-4">
          {tech.map((tech) => techIcons[tech])}
        </div>
      </div>
      <p className={styles.secondaryInfo}> {date} • {type} </p>
      <div className={styles.divider}/>
      <p className="ml-5 m-3 float-left text-neutral-300 text-sm"> {description} </p>
      {picture ? <Image src={picture} alt="project" width={1375} height={1286} className={styles.image} /> : ""}

      {link ? (
        <div className={styles.links}>
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <SiGithub size={20} color="#ffffff"/>
          </a>

          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <RiExternalLinkLine size={20}/> <span> View Project </span>
          </a>

          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <RiInformationLine size={20}/> <span> More </span>
          </a>
        </div>
      ) : ""}
    </div>
  );
};

