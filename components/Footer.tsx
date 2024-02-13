
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { SiOpensea } from "react-icons/si";
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>

        <Image src="/images/yiss-logo.png" width={50} height={50} alt="" />

        <div className={styles.footer_links}>
            <div className={styles.link_collum}>
                <Link className={styles.footer_link} href="/">Contact</Link>
                <Link className={styles.footer_link} href="/">Shop</Link>
                <Link className={styles.footer_link} href="/">Discord</Link>
                <Link className={styles.footer_link} href="/">X</Link>
                <Link className={styles.footer_link} href="/">Telegram</Link>
                <Link className={styles.footer_link} href="/">Polygon</Link>
                <Link className={styles.footer_link} href="/">Uniswap</Link>
                
            </div>
            <div className={styles.link_collum}>
                <Link className={styles.footer_link} href="/">Metamask</Link>
                <Link className={styles.footer_link} href="/">Phantom</Link>
                <Link className={styles.footer_link} href="/">Opensea</Link>
                <Link className={styles.footer_link} href="/">Pancakeswap</Link>
                <Link className={styles.footer_link} href="/">Jupiter</Link>
                <Link className={styles.footer_link} href="/">Polygonscan</Link>
                <Link className={styles.footer_link} href="/">CoinMarketCap</Link>
            </div>
        </div>

        <div className={styles.links}>
            <Link className={styles.link} href="/"><FaDiscord /></Link>
            <Link className={styles.link} href="/"><FaXTwitter /></Link>
            <Link className={styles.link} href="/"><FaTelegramPlane /></Link>
            <Link className={styles.link} href="/"><SiCoinmarketcap /></Link>
            <Link className={styles.link} href="/"><SiOpensea /></Link>
        </div>

        
            
        <p>&copy; 2024 $YISS</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;