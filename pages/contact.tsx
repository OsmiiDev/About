import type { NextPage } from "next";
import Head from "next/head";
import { SiDiscord } from "react-icons/si";
import { SocialMediaCard } from "../components/SocialMediaCard";


const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title> Contact </title>
      </Head>
      <h2> Contact me </h2>
      <SocialMediaCard icon={<SiDiscord />} link="https://discord.gg/ZQQQQQQ" title="Discord" description="Join my discord server" />
    </>
  );
};

export default Contact;
