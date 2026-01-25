
// const API_URL = import.meta.env.VITE_API_URL;
// console.log('API_URL in api.js:', API_URL);

// // Contact API
// export const sendContactMessage = async (contactData) => {
//   try {
//     console.log('Sending to:', API_URL + '/contact');
//     const response = await fetch(`${API_URL}/contact`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contactData)
//     });
    
//     // ... rest of your code
//   } catch (error) {
//     console.error('Error in sendContactMessage:', error);
//     throw error;
//   }
// };

// // Projects API
// export const fetchProjects = async () => {
//   try {
//     console.log('API_URL:', API_URL); // Add this line
//     console.log('Full URL:', `${API_URL}/projects`);
//     const response = await fetch(`${API_URL}/projects`);
//     console.log("Status:", response.status);
// console.log("Status text:", response.statusText);
//     if (!response.ok) {
//       throw new Error('Failed to fetch projects');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     throw error;
//   }
// };
const API_URL = 'http://localhost:5000/api';
console.log('API_URL in api.js:', API_URL);

// Contact API - Complete function
// Contact API
export const sendContactMessage = async (contactData) => {
  try {
    console.log('📧 Sending contact to:', `${API_URL}/contact`);
    console.log('Data:', contactData);
    
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        message: contactData.message
      })
    });
    
    console.log('📊 Response status:', response.status, response.statusText);
    
    // Check content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('❌ Non-JSON response:', text.substring(0, 200));
      throw new Error(`Server returned HTML. Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('❌ API Error:', data);
      throw new Error(data.message || 'Failed to send message');
    }
    
    console.log('✅ Contact sent successfully:', data);
    return data;
    
  } catch (error) {
    console.error('❌ Contact error:', error);
    throw error;
  }
};
// Projects API - Complete function
export const fetchProjects = async () => {
  try {
    console.log('📡 Fetching projects from:', `${API_URL}/projects`);
    
    const response = await fetch(`${API_URL}/projects`);
    
    console.log('📊 Projects response status:', response.status, response.statusText);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    console.log('📄 Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('❌ Projects: Received non-JSON response. First 500 chars:', text.substring(0, 500));
      throw new Error(`Server returned HTML instead of JSON. Status: ${response.status}`);
    }
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ Projects error response:', errorData);
      throw new Error(errorData.message || `Failed to fetch projects: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`✅ Success! Received ${data.length} projects`);
    return data;
    
  } catch (error) {
    console.error('❌ Error fetching projects:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    throw error;
  }
};

// Optional: Get single project by ID
export const fetchProjectById = async (id) => {
  try {
    console.log(`📡 Fetching project ${id} from:`, `${API_URL}/projects/${id}`);
    
    const response = await fetch(`${API_URL}/projects/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch project ${id}: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`✅ Project ${id} fetched successfully`);
    return data;
    
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    throw error;
  }
};

// Optional: Health check
export const checkApiHealth = async () => {
  try {
    console.log('🏥 Checking API health at:', `${API_URL}/health`);
    
    const response = await fetch(`${API_URL}/health`);
    
    if (!response.ok) {
      throw new Error(`API health check failed: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API is healthy:', data);
    return data;
    
  } catch (error) {
    console.error('API health check failed:', error);
    throw error;
  }
};