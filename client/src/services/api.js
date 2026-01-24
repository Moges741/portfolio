// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// // Contact API with better error handling
// export const sendContactMessage = async (contactData) => {
//   try {
//     console.log('Sending contact data:', contactData);
    
//     const response = await fetch(`${API_URL}/contact`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contactData)
//     });
    
//     console.log('Response status:', response.status);
    
//     const data = await response.json();
//     console.log('Response data:', data);
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to send message');
//     }
    
//     return data;
//   } catch (error) {
//     console.error('Error in sendContactMessage:', error);
//     throw error;
//   }
// };

// // Test backend connection
// export const testBackendConnection = async () => {
//   try {
//     const response = await fetch(`${API_URL}/health`);
//     return await response.json();
//   } catch (error) {
//     console.error('Backend not reachable:', error);
//     throw error;
//   }
// };
// // Projects API
// export const fetchProjects = async () => {
//   try {
//     const response = await fetch(`${API_URL}/projects`);
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch projects');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     throw error;
//   }
// };

// // Add project (if you need admin panel later)
// export const addProject = async (projectData) => {
//   try {
//     const response = await fetch(`${API_URL}/projects`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(projectData)
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to add project');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error adding project:', error);
//     throw error;
//   }
// };
// Vite automatically provides this variable
const API_URL = import.meta.env.VITE_API_URL || import.meta.env.API_URL ;

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
    const response = await fetch(`${API_URL}/projects`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};