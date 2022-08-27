import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Home.module.css";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { SocialMediaCard } from "../components/SocialMediaCard";
import { SiDiscord, SiGithub, SiTwitter } from "react-icons/si";
import { RiOpenSourceLine } from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Osmii </title>
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.header}> Hey, I&#39;m Osmii. </h2> <div className={styles.cursor}></div>
        </div>
        <p className={styles.description}> I&#39;m an aspiring full-stack developer with interests in machine learning. </p>
        <div className={styles.links}>
          <Link href = "/projects">
            <a>
              <div className={styles.projects}>
                <RiOpenSourceLine color={"#ffffff"} size={20}/> <p> My Projects </p>
              </div>
            </a>
          </Link>
          <Link href="/#about">
            <a>
              <div className={styles.about}>
                <p> More about me </p> <span> <BsChevronRight size={12} className="icon"/> </span>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.contactContainer}>
          <SocialMediaCard icon={<SiDiscord size={27} color="#5865F2"/>} link="https://discord.com/users/328984108271140864" title="Discord" description="Osmii#0076" />
          <SocialMediaCard icon={<SiGithub size={27} color="#cccccc"/>} link="https://github.com/OsmiiDev" title="Github" description="OsmiiDev" />
          <SocialMediaCard icon={<SiTwitter size={27} color="#1da1f2"/>} link="https://discord.com/users/328984108271140864" title="Twitter" description="@Cosmiium" />
        </div>
      </div>
      <Image src="/profile.png" alt="profile" width={1375} height={1286} className={styles.profile} />
    </>
  );
};

export default Home;
