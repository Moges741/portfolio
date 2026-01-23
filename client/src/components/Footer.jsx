import { 
  GitHub, 
  LinkedIn, 
  Email,
  ArrowUpward
} from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import styles from './Footer.module.css';
import { Telegram } from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Back to Top */}
        <button className={styles.backToTop} onClick={scrollToTop}>
          <ArrowUpward />
        </button>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/moges741" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/moges-sisay-265127354" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="https://t.me/mogesDemo" target="_blank" rel="noopener noreferrer">
            <Telegram />
          </a>
          <a href="mailto:mogesse741@gmail.com">
            <Email />
          </a>  
          <a href="https://leetcode.com/u/moges741/" target="_blank" rel="noopener noreferrer">
            <CodeIcon />
          </a>
        </div>

        {/* Navigation */}
        <nav className={styles.footerNav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#tools">Tools</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Moges Sisay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;