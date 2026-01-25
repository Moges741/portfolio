
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Contact API
export const sendContactMessage = async (contactData) => {
  try {
    console.log('Sending to:', API_URL + '/contact');
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    
    // ... rest of your code
  } catch (error) {
    console.error('Error in sendContactMessage:', error);
    throw error;
  }
};

// Projects API
export const fetchProjects = async () => {
  try {
    console.log('API_URL:', API_URL); // Add this line
    console.log('Full URL:', `${API_URL}/projects`);
    const response = await fetch(`${API_URL}/projects`);
    console.log("Status:", response.status);
console.log("Status text:", response.statusText);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
