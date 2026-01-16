import { useState } from 'react';
import { 
  Code, 
  Web, 
  Build, 
  DesignServices, 
  Security, 
  Devices,
  Speed,
  Cloud,
  SupportAgent
} from '@mui/icons-material';
import styles from './Services.module.css';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Code sx={{ fontSize: 50 }} />,
      title: "Full-Stack Development",
      shortDesc: "Complete web solutions",
      fullDesc: "End-to-end development using modern stacks like MERN, PERN, and LAMP. From database design to frontend interfaces.",
      tags: ["React", "Node.js", "Express", "MongoDB", "MySQL"],
      color: "#7c3aed"
    },
    {
      id: 2,
      icon: <Web sx={{ fontSize: 50 }} />,
      title: "Web Development",
      shortDesc: "Custom web applications",
      fullDesc: "Building responsive, interactive web applications with clean code and modern frameworks.",
      tags: ["HTML/CSS", "JavaScript", "React", "Vue.js"],
      color: "#06b6d4"
    },
    {
      id: 3,
      icon: <DesignServices sx={{ fontSize: 50 }} />,
      title: "UI/UX Design",
      shortDesc: "Beautiful user interfaces",
      fullDesc: "Creating intuitive and aesthetically pleasing designs with Figma, Adobe XD, and user-centered principles.",
      tags: ["Figma", "UI Design", "UX Research", "Prototyping"],
      color: "#10b981"
    },
    {
      id: 4,
      icon: <Build sx={{ fontSize: 50 }} />,
      title: "Web Maintenance",
      shortDesc: "Keep your site running",
      fullDesc: "Regular updates, security patches, performance optimization, and bug fixes for existing websites.",
      tags: ["Updates", "Security", "Optimization", "Backups"],
      color: "#f59e0b"
    },
    {
      id: 5,
      icon: <Security sx={{ fontSize: 50 }} />,
      title: "Security Implementation",
      shortDesc: "Secure your applications",
      fullDesc: "Implementing authentication, authorization, encryption, and security best practices.",
      tags: ["JWT", "OAuth", "SSL/TLS", "Encryption"],
      color: "#ef4444"
    },
    {
      id: 6,
      icon: <Devices sx={{ fontSize: 50 }} />,
      title: "Responsive Design",
      shortDesc: "Works on all devices",
      fullDesc: "Creating mobile-first designs that work perfectly on phones, tablets, and desktops.",
      tags: ["Mobile-first", "Flexbox", "Grid", "Media Queries"],
      color: "#8b5cf6"
    },
    {
      id: 7,
      icon: <Speed sx={{ fontSize: 50 }} />,
      title: "Performance Optimization",
      shortDesc: "Fast loading websites",
      fullDesc: "Optimizing speed, reducing load times, and improving Core Web Vitals scores.",
      tags: ["Lazy Loading", "Caching", "CDN", "Minification"],
      color: "#3b82f6"
    },
    {
      id: 8,
      icon: <Cloud sx={{ fontSize: 50 }} />,
      title: "Deployment & Hosting",
      shortDesc: "Deploy to the cloud",
      fullDesc: "Deploying applications to platforms like Vercel, Netlify, AWS, and managing cloud infrastructure.",
      tags: ["Vercel", "AWS", "Netlify", "Docker"],
      color: "#6366f1"
    },
    {
      id: 9,
      icon: <SupportAgent sx={{ fontSize: 50 }} />,
      title: "Training & Mentorship",
      shortDesc: "Learn software development",
      fullDesc: "One-on-one training, code reviews, and mentorship for aspiring developers.",
      tags: ["JavaScript", "React", "Node.js", "Code Reviews"],
      color: "#ec4899"
    }
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <p className={styles.tagline}>
            <span className={styles.highlight}>"Eat, Sleep, Code, Repeat"</span>
          </p>
          <div className={styles.divider}></div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div 
                key={service.id}
                className={`${styles.serviceCard} ${expandedCard === service.id ? styles.expanded : ''}`}
                onClick={() => handleCardClick(service.id)}
                style={{ '--card-color': service.color }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper} style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceShortDesc}>{service.shortDesc}</p>
                  
                  <div className={styles.tags}>
                    {service.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  
                  {/* Expanded Content */}
                  <div className={styles.expandedContent}>
                    <p className={styles.serviceFullDesc}>{service.fullDesc}</p>
                    
                    <div className={styles.actionButtons}>
                      <button className={styles.detailsBtn}>View Details</button>
                      <button className={styles.contactBtn}>Contact</button>
                    </div>
                  </div>
                </div>
                
                {/* Expand/Collapse Indicator */}
                <div className={styles.expandIndicator}>
                  {expandedCard === service.id ? '▼' : '▶'}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Banner */}
          <div className={styles.featureBanner}>
            <div className={styles.bannerContent}>
              <h3>Algorithm Specialist</h3>
              <p>
                Deeply interested in algorithms and data structures. 
                I solve complex problems with efficient approaches using 
                optimal time and space complexity solutions.
              </p>
              <div className={styles.algorithmSkills}>
                <span>Data Structures</span>
                <span>Dynamic Programming</span>
                <span>Graph Algorithms</span>
                <span>Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <h4>100+</h4>
            <p>Projects Delivered</p>
          </div>
          <div className={styles.statItem}>
            <h4>99%</h4>
            <p>Client Satisfaction</p>
          </div>
          <div className={styles.statItem}>
            <h4>24/7</h4>
            <p>Support Available</p>
          </div>
          <div className={styles.statItem}>
            <h4>50+</h4>
            <p>Technologies Used</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;