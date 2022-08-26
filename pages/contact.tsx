import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { SiDiscord, SiGithub, SiTwitter } from "react-icons/si";
import { SocialMediaCard } from "../components/SocialMediaCard";


const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title> Links </title>
      </Head>
      <h2 className={styles.title}> My social medias </h2>
      <div className={styles.cards}>
        <SocialMediaCard icon={<SiDiscord size={30} color="#5865F2"/>} link="https://discord.com/users/328984108271140864" title="Discord" description="Osmii#0076" />
        <SocialMediaCard icon={<SiGithub size={30} color="#cccccc"/>} link="https://github.com/OsmiiDev" title="Github" description="OsmiiDev" />
        <SocialMediaCard icon={<SiTwitter size={30} color="#1da1f2"/>} link="https://discord.com/users/328984108271140864" title="Twitter" description="@Cosmiium" />
      </div>
    </>
  );
};

export default Contact;
