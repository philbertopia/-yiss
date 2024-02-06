import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          

          <Image src="/images/yiss-hero.png" width={300} height={300} alt="" />
          <h1 className={styles.title}>
            $YISS
          </h1>
          <p className={styles.description}>
            Motha Fuckin Breadcrumbs
          </p>

          <p className={styles.description}>
            Coming Soon!
          </p>

          <Image src="/images/breadcrumbs.png" width={60} height={60} alt="" />

        </div>
      </div>
    </main>
  );
};

export default Home;
