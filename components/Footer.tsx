import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
            
            <p>&copy; 2024 $YISS</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;