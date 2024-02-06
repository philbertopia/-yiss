import styles from "../styles/Navbar.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";

const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image 
                src="/images/yiss-logo.png" 
                width={40} 
                height={40} 
                alt="Yiss logo" 
            />
            <h1>$YISS</h1>
        </div>
        <ConnectWallet
          style={{ backgroundColor: "black", color: "white", padding: "10px 20px" }}
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
            />
      </nav>
    );
  };
  
  export default Navbar;
  