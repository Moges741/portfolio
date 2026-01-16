import { useState } from 'react';
import realEstate from '../assets/images/realEstate.jpeg';
import amazon from '../assets/images/amazon.jpeg';
import forum from '../assets/images/forum22.jpg';
import netflix from '../assets/images/netflix.png';
import { 
  GitHub, 
  Launch, 
} from '@mui/icons-material';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "Frontend Netflix replica with video streaming, and personalized recommendations.",
      category: "frontend",
      image: netflix, // You'll add your image here
      github: "https://github.com/Moges741/using-api",
      live: "https://trailer-app-clone.netlify.app/",
    },
    {
      id: 2,
      title: "Amazon Clone",
      description: "E-commerce platform with shopping cart, payment processing.",
      category: "fullstack",
      image: amazon,
      github: "https://github.com/Moges741/Amazon-Project",
      live: "https://amazon-gebeya.vercel.app/",
    },
    {
      id: 3,
      title: "Evangadi Forum",
      description: "Community forum platform for questions, answers, and discussions with real-time updates.",
      category: "fullstack",
      image: forum,
      github: "https://github.com/Moges741/evangadi_forum",
      live: "https://studentsforum.vercel.app/",
    },
    {
      id: 4,
      title: "RealEstate Platform",
      description: "Property listing website with search filters, virtual tours, and agent connections.",
      category: "fullstack",
      image: realEstate,
      github: "https://github.com/Moges741/RealState",
      live: "https://realestate.moges.com",
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Showcasing my best work with modern technologies and clean code
          </p>
          <div className={styles.divider}></div>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - 4 columns on desktop */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onClick={() => window.open(project.live, '_blank')}
            >
              {/* Project Image */}
              <div className={styles.imageContainer}>
                <div className={styles.projectImage}>
                  {/* Image will go here */}

                 
                    <p><img src={project.image} alt={project.title} /></p>
               
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <button 
                        className={styles.viewBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.live, '_blank');
                        }}
                      >
                        <Launch /> Live Demo
                      </button>
                      <button 
                        className={styles.githubBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <GitHub /> Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectIcons}>
                    {/* <span className={styles.fullstackBadge}>Full Stack</span> */}
                  </div>
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>


                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHub /> GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Launch /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}

      </div>
    </section>
  );
};

export default Projects;