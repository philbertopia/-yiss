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
          <Image src="/images/yiss-logo-title.png" width={330} height={339} alt="" />
        </div>
          
          <div className={styles.links}>
            <Link className={styles.link} href="/"><FaDiscord /></Link>
            <Link className={styles.link} href="/"><FaXTwitter /></Link>
            <Link className={styles.link} href="/"><FaTelegramPlane /></Link>
            <Link className={styles.link} href="/"><SiCoinmarketcap /></Link>
            <Link className={styles.link} href="/"><SiOpensea /></Link>
          </div>

          <div className={styles.text}>
            <h1>
              Aww $YISS
            </h1>
            <h3>Motha Fuckin Breadcrumbs!</h3>
            <div className={styles.buttons}>
              <button className={styles.button}>Buy on Uniswap</button>
              <button className={styles.button}>Buy on Jupiter</button>
            </div>

            <div>
              <h3>Honk Your Way to Sustainable Earnings.</h3>
              <p>$YISS is a Passive Earning Memecoin for Happy Gooses on the Polygon Network.</p>
              <Image src="/images/polygon-matic-logo.png" width={40} height={40} alt="" />
            </div>
            
            <h2>Join & Learn </h2>
            <p>Join the $YISS community on Discord to learn about whitelist, preorders, airdrops & other special breadcrumbs.</p>
            <Image src="/images/breadcrumbs.png" width={40} height={40} alt="" />

            <div>
              <h2>$YISS-enomics</h2>
              <p>(2%) Tax on Buys, Sells, & Transfers</p>
              <p className={styles.bold}>100,000,000 SUPPLY</p>
              <div className={styles.polyscan}>
              <p >View on&#160;</p>
                <Link href="https://polygonscan.com/" >
                  polygonscan
                </Link>
              </div>
            </div>

            <h3>Earn Rewards through Holding</h3>
            <div className={styles.hold}>
              <p>The $YISS token offers holders a passive earning opportunity through regular distributions from a dedicated staking pool. Here's how it works:</p>
              <ul>
                <li><span className={styles.bold}>1% Transaction Tax:</span> A 1% fee is levied on each $yiss transaction. These collected funds are used for staking purposes.</li>
                <li><span className={styles.bold}>Monthly Staking & Distribution:</span> The accumulated 1% tax is pooled and staked monthly. The rewards generated from staking are then proportionally distributed to all $yiss holders based on their individual holdings.</li>
                <li><span className={styles.bold}>1% Fuels Growth and Innovation:</span> A portion of the transaction tax supports our dedicated team of developers and artists, while also funding exciting new projects that expand the $yiss ecosystem, ultimately benefiting all token holders.</li>
              </ul>
              <p>In essence, holding $YISS tokens passively earns you a share of the staking rewards collected through buy and sell transactions. This incentivizes long-term holding and fosters a loyal community around the token.</p>
            </div>
            <h3>Motha Fuckin Breadcrumbs!</h3>
            

            <div className={styles.buttons}>
              <button className={styles.button}>Buy on Uniswap</button>
              <button className={styles.button}>Buy on Jupiter</button>
            </div>

            <Image className={styles.goose} src="/images/yiss-duck.jpeg" width={350} height={350} alt="" />

            <h3>NFTs Coming Soon!</h3>
            <div className={styles.hold}>
              <ul>
                <li><span className={styles.bold}>Own a piece of the YISS ecosystem:</span> Unlock exclusive NFTs as a $YISS holder, granting rewards and boosting the communal staking pool for even greater returns.</li>
                <li><span className={styles.bold}>NFT rewards and ecosystem growth:</span> Every $YISS holder gets a chance to own valuable NFTs, while proceeds fuel the communal staking pool, benefiting everyone.</li>
              </ul>
            </div>

            <Image src="/images/breadcrumbs.png" width={50} height={50} alt="" />

            <h2>$YISS Project Roadmap</h2>

            <div className={styles.hold}>
              
              <h3>Phase 1: Launch & Growth (Current)</h3>
              <ul>
                <li><span className={styles.bold}>Token launch:</span> Successfully launched the YISS token on the Polygon network, ensuring accessibility and low transaction fees.</li>
                <li><span className={styles.bold}>Staking pool establishment:</span> Implemented a robust staking pool, allowing YISS holders to earn passive rewards through their holdings.</li>
                <li><span className={styles.bold}>Community building:</span> Engaged with the community through various channels, fostering a positive and collaborative environment.</li>
                <li><span className={styles.bold}>Marketing and awareness:</span> Launched marketing campaigns to raise awareness and attract new users to the YISS ecosystem.</li>
              </ul>

              <h3>Phase 2: Expansion & Utility</h3>
              <ul>
                <li><span className={styles.bold}>NFT integration:</span> Integrating NFTs into the ecosystem, offering exclusive rewards and utility to YISS holders.</li>
                <li><span className={styles.bold}>Governance implementation:</span> Establishing a community governance framework, empowering YISS holders to participate in key decisions.</li>
                <li><span className={styles.bold}>Partnerships and collaborations:</span> Seeking strategic partnerships with other projects and platforms to expand the YISS ecosystem.</li>
                <li><span className={styles.bold}>Exchange Listings:</span> Securing listings on reputable cryptocurrency exchanges to increase liquidity and accessibility.</li>
              </ul>

              <h3>Phase 3: Innovation & Sustainability</h3>
              <ul>
                <li><span className={styles.bold}>Decentralized applications (dApps) integration:</span> Collaborating with developers to build innovative dApps that leverage the YISS token and its functionalities.</li>
                <li><span className={styles.bold}>Treasury Management:</span> Establishing a sustainable treasury management system to support long-term project development and community initiatives.</li>
                <li><span className={styles.bold}>Continuous Improvement:</span> Continuously evolving and refining the YISS ecosystem based on community feedback and market trends.</li>
              </ul>
              <p><span className={styles.bold}>Note:</span> This roadmap is subject to change based on various factors, including community feedback, market conditions, and technological advancements. We will continue to update this roadmap as we progress and achieve new milestones.</p>
            </div>

            <div className={styles.buttons}>
              <button className={styles.button}>Buy on Uniswap</button>
              <button className={styles.button}>Buy on Jupiter</button>
            </div>

            <h2>Stay tuned for exciting developments in the $YISS project!</h2>

          </div>
      </div>
    </main>
  );
};

export default Home;
