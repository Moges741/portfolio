import { useState } from 'react';
import { 
  LocationOn, 
  Email, 
  Phone, 
  Send,
  CheckCircle,
  Error
} from '@mui/icons-material';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual backend endpoint
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>GET IN TOUCH</h2>
          <p className={styles.introText}>
            Feel free to get in touch with me. I am always open to discussing new projects, 
            creative ideas or opportunities to be part of your visions.
          </p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.contactContent}>
          {/* Left Side - Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <LocationOn />
              </div>
              <div className={styles.infoContent}>
                <h4>ADDRESS POINT</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Email />
              </div>
              <div className={styles.infoContent}>
                <h4>MAIL ME</h4>
                <p>mogesse741@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone />
              </div>
              <div className={styles.infoContent}>
                <h4>CALL ME</h4>
                <p>+251924433166</p>
              </div>
            </div>


          </div>

          {/* Right Side - Contact Form */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className={styles.errorMessage}>
                    <Error fontSize="small" /> {errors.name}
                  </div>
                )}
              </div>

              {/* Subject Field */}
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  YOUR SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.subject ? styles.error : ''}`}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <div className={styles.errorMessage}>
                    <Error fontSize="small" /> {errors.subject}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Please fill out this field..."
                  rows="6"
                />
                {errors.message && (
                  <div className={styles.errorMessage}>
                    <Error fontSize="small" /> {errors.message}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className={styles.formDivider}></div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send /> SEND MESSAGE
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <CheckCircle /> Message sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <Error /> Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;