import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.greeting}>Hello!</h2>
          <h1 className={styles.name}>This is <span>Moges Sisay</span></h1>
          <h2 className={styles.title}>Creative Developer</h2>
          
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryBtn}>
              Hire me
            </a>
            <a href="#projects" className={styles.secondaryBtn}>
              My works
            </a>
          </div>
        </div>
        
        {/* You can add your person image here */}
        <div className={styles.imageContainer}>
          {/* Replace with your actual image */}
          <div className={styles.profileImage}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;