import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Left side - Name */}
        <div className={styles.logo}>
          <h1>MOGES</h1>
        </div>

        {/* Desktop Navigation - Right side */}
        <div className={styles.desktopMenu}>
          <Link to="home" smooth={true} duration={500} className={styles.navLink}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className={styles.navLink}>
            About
          </Link>
          <Link to="services" smooth={true} duration={500} className={styles.navLink}>
            Services
          </Link>
          <Link to="tools" smooth={true} duration={500} className={styles.navLink}>
            Tools
          </Link>
          <Link to="projects" smooth={true} duration={500} className={styles.navLink}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className={styles.navLink}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <Link to="home" smooth={true} duration={500} className={styles.mobileLink} onClick={closeMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className={styles.mobileLink} onClick={closeMenu}>
            About
          </Link>
          <Link to="services" smooth={true} duration={500} className={styles.mobileLink} onClick={closeMenu}>
            Services
          </Link>
          <Link to="tools" smooth={true} duration={500} className={styles.mobileLink} onClick={closeMenu}>
            Tools
          </Link>
          <Link to="projects" smooth={true} duration={500} className={styles.mobileLink} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className={styles.mobileLink} onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;