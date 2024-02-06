import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { SiOpensea } from "react-icons/si";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <Image src="/images/yiss-hero.png" width={300} height={300} alt="" />
          <Image className={styles.title} src="/images/yiss-title.png" width={330} height={134} alt="" />
        </div>
          
          <div className={styles.links}>
            <Link className={styles.link} href="/"><FaDiscord /></Link>
            <Link className={styles.link} href="/"><FaXTwitter /></Link>
            <Link className={styles.link} href="/"><FaTelegramPlane /></Link>
            <Link className={styles.link} href="/"><SiCoinmarketcap /></Link>
            <Link className={styles.link} href="/"><SiOpensea /></Link>
          </div>
          <h2>
            Aww Yiss!
          </h2>
          <p>Motha Fuckin Breadcrumbs!</p>
          <p>Memecoin for happy gooses on Polygon</p>
          <p>NFTs coming soon!</p>
          <p>Join the community on Discord to learn about whitelist, preorders, airdrops & other special breadcrumbs.</p>
          
      </div>
    </main>
  );
};

export default Home;
