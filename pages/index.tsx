import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Home.module.css";
import { BsAt, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

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
        <p className={styles.description}> A full-stack developer with interests in machine learning. </p>
        <div className={styles.links}>
          <Link href = "/contact">
            <a>
              <div className={styles.contact}>
                <BsAt color={"#ffffff"} size={20}/> <p> Contact me </p>
              </div>
            </a>
          </Link>
          <Link href="/portfolio">
            <a>
              <div className={styles.projects}>
                <p> What I do </p> <span> <BsChevronRight size={12} className="icon"/> </span>
              </div>
            </a>
          </Link>
        </div>
        <Image src="/profile.png" alt="profile" width={1375} height={1286} className={styles.profile} />
      </div>
    </>
  );
};

export default Home;
