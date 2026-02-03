
import { useState, useEffect } from 'react'; // Add useEffect
import realEstate from '../assets/images/image copy 2.png';
import amazon from '../assets/images/image copy.png';
import forum from '../assets/images/forum22.jpg';
import netflix from '../assets/images/netflix.png';
import Loader from 'react-spinners/CircleLoader';

import { 
  GitHub, 
  Launch, 
} from '@mui/icons-material';
import { fetchProjects } from '../services/api'; // Add this import
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to local images if API fails

        setProjects([
          {
            id: 1,
            title: "Netflix Clone",
            description: "Frontend Netflix replica with video streaming, and personalized recommendations.",
            category: "frontend",
            image: netflix,
            github_link: "https://github.com/Moges741/using-api",
            live_link: "https://trailer-app-clone.netlify.app/",

          },
          {
            id: 2,
            title: "Amazon Clone",
            description: "Full-stack Amazon clone with user authentication, product listings, and shopping cart functionality.",
            category: "fullstack",
            image: amazon,
            github_link: "https://github.com/Moges741/Amazon-Project",
            live_link: "https://amazon-gebeya.vercel.app/",
          },
          {
            id: 3,
            title: "Evangadi Forum",
            description: "A community forum platform for discussions, Q&A, and knowledge sharing among users.",
            category: "fullstack",
            image: forum,
            github_link: "https://github.com/Moges741/evangadi_forum",
            live_link: "https://studentsforum.vercel.app/signin",
          },
          {
            id: 4,
            title: "RealEstate Platform",
            description: "A real estate listing platform with property search, filtering, and detailed property views.",
            category: "fullstack",
            image: realEstate,
            github_link: "https://github.com/Moges741/realestate1",
            live_link: "https://emrealestate.vercel.app/",
          }
          // ... other projects
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  if (loading) {
    return (
      <section className={styles.projects} id="projects">
        <div className={styles.container}>
          <div className={styles.loading}><Loader size={40} color="#4F46E5" /><p>project loading...</p></div>
        </div>
      </section>
    );
  }

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

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onClick={() => window.open(project.live_link, '_blank')} // Change live to live_link
            >
              {/* Project Image */}
              <div className={styles.imageContainer}>
                <div className={styles.projectImage}>
                  {/* Use image from backend or fallback */}
                  {project.image_url ? (
                    <img src={project.image_url} alt={project.title} />
                  ) : (
                    // Use local images based on title
                    <img src={getLocalImage(project.title)} alt={project.title} />
                  )}
                  
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <button 
                        className={styles.viewBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.live_link, '_blank'); // Change live to live_link
                        }}
                      >
                        <Launch /> Live Demo
                      </button>
                      <button 
                        className={styles.githubBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github_link, '_blank'); // Change github to github_link
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
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <a 
                    href={project.github_link} // Change github to github_link
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHub /> GitHub
                  </a>
                  <a 
                    href={project.live_link} // Change live to live_link
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
      </div>
    </section>
  );
};

// Helper function to get local images
const getLocalImage = (title) => {
  switch(title) {
    case 'Netflix Clone': return netflix;
    case 'Amazon Clone': return amazon;
    case 'Evangadi Forum': return forum;
    case 'RealEstate Platform': return realEstate;
    default: return netflix;
  }
};

export default Projects;