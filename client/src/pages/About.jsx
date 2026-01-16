import styles from './About.module.css';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery',
    'React.js', 'Express.js', 'Node.js', 'MySQL', 'Git',
    'REST API', 'Responsive Design', 'Problem Solving'
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleLine}></div>
        </div>
        
        <div className={styles.content}>
          {/* Quote Section */}
          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              "A good programmer is someone who always looks both ways before crossing a one way street."
            </p>
            <p className={styles.quoteAuthor}>— Doug Linder</p>
          </div>
          
          <div className={styles.mainContent}>
            {/* Left side - Image */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                {/* Your image will go here */}
                <div className={styles.profileImage}></div>
                <div className={styles.imageDecoration}></div>
              </div>
            </div>
            
            {/* Right side - Text */}
            <div className={styles.textSection}>
              <h3 className={styles.name}>Moges Sisay</h3>
              <p className={styles.location}>Addis Ababa, Ethiopia</p>
              
              <p className={styles.description}>
                I am a trainer in software engineering skills and a passionate <span className={styles.highlight}>full-stack developer</span>. My technical expertise includes a wide range of modern web technologies.
              </p>
              
              <p className={styles.description}>
                I am deeply interested in problem-solving, leveraging the right technologies and algorithmic approaches to build efficient and impactful solutions. My focus is not only on writing clean and scalable code but also on continuously improving my knowledge, staying adaptable, and exploring innovative ways to tackle challenges in the software development world.
              </p>
              
              {/* Skills Section */}
              <div className={styles.skillsSection}>
                <h4 className={styles.skillsTitle}>Technical Skills</h4>
                <div className={styles.skillsGrid}>
                  {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stats */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;