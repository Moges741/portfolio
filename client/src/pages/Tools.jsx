import { 
  Code, 
  DataObject, 
  Storage, 
  Terminal, 
  BugReport,
  Cloud,
  Security,
  Devices,
  Speed,
  Api
} from '@mui/icons-material';
import styles from './Tools.module.css';

const Tools = () => {
  const tools = [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", icon: <Code />, level: "Advanced", color: "#00599C" },
        { name: "JavaScript", icon: <DataObject />, level: "Expert", color: "#F7DF1E" },
        { name: "Python", icon: <Terminal />, level: "Intermediate", color: "#3776AB" },
        { name: "TypeScript", icon: <Api />, level: "Advanced", color: "#3178C6" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <Code />, level: "Expert", color: "#E34F26" },
        { name: "CSS", icon: <Devices />, level: "Expert", color: "#1572B6" },
        { name: "React.js", icon: <DataObject />, level: "Expert", color: "#61DAFB" },
        { name: "Vue.js", icon: <Speed />, level: "Intermediate", color: "#4FC08D" },
        { name: "Bootstrap", icon: <Devices />, level: "Advanced", color: "#7952B3" },
        { name: "jQuery", icon: <Terminal />, level: "Advanced", color: "#0769AD" }
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", icon: <Terminal />, level: "Expert", color: "#339933" },
        { name: "Express.js", icon: <Api />, level: "Expert", color: "#000000" },
        { name: "MySQL", icon: <Storage />, level: "Advanced", color: "#4479A1" },
        { name: "MongoDB", icon: <Storage />, level: "Intermediate", color: "#47A248" },
        { name: "PostgreSQL", icon: <Storage />, level: "Intermediate", color: "#336791" }
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", icon: <Code />, level: "Expert", color: "#F05032" },
        { name: "Docker", icon: <Cloud />, level: "Intermediate", color: "#2496ED" },
        { name: "AWS", icon: <Cloud />, level: "Beginner", color: "#FF9900" },
        { name: "Vercel", icon: <Cloud />, level: "Advanced", color: "#000000" },
        { name: "VS Code", icon: <Terminal />, level: "Expert", color: "#007ACC" },
        { name: "Postman", icon: <Api />, level: "Advanced", color: "#FF6C37" }
      ]
    }
  ];

  return (
    <section className={styles.tools} id="tools">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              "Talk is cheap. Show me the code."
            </p>
            <p className={styles.quoteAuthor}>— Linus Torvalds</p>
          </div>
          <p className={styles.subtitle}>
            My arsenal of tools and technologies I've mastered to build amazing things
          </p>
        </div>

        {/* Tool Categories */}
        <div className={styles.categoriesGrid}>
          {tools.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.toolsGrid}>
                {category.items.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className={styles.toolItem}
                    style={{ '--tool-color': tool.color }}
                  >
                    <div className={styles.toolIcon} style={{ color: tool.color }}>
                      {tool.icon}
                    </div>
                    <div className={styles.toolInfo}>
                      <h4 className={styles.toolName}>{tool.name}</h4>
                      <div className={styles.toolLevel}>
                        <div 
                          className={`${styles.levelBar} ${styles[tool.level.toLowerCase()]}`}
                          style={{ backgroundColor: tool.color }}
                        ></div>
                        <span className={styles.levelText}>{tool.level}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <h4>12+</h4>
            <p>Programming Languages</p>
          </div>
          <div className={styles.statCard}>
            <h4>15+</h4>
            <p>Frameworks & Libraries</p>
          </div>
          <div className={styles.statCard}>
            <h4>50+</h4>
            <p>Tools Mastered</p>
          </div>
          <div className={styles.statCard}>
            <h4>100%</h4>
            <p>Code Efficiency</p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className={styles.philosophySection}>
          <div className={styles.philosophyContent}>
            <h3>Why Tools Matter</h3>
            <p>
              A craftsman is only as good as their tools. I believe in choosing 
              the right tool for every job—whether it's C++ for performance-critical 
              applications, React for dynamic UIs, or Node.js for scalable backends.
            </p>
            <p>
              I continuously explore new technologies to stay at the cutting edge 
              of software development, ensuring I can deliver the most efficient 
              and modern solutions.
            </p>
          </div>
          {/* Image Container - Add your image here */}
          <div className={styles.toolsImage}>
            {/* Your image will go here */}
            <div className={styles.imagePlaceholder}>
              <p>Insert your tools/workspace image here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;