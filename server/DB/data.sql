-- CREATE TABLE projects (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(255) NOT NULL,
--   description TEXT,
--   github_link VARCHAR(255),
--   live_link VARCHAR(255),
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE contacts (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100),
--   email VARCHAR(100),
--   message TEXT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  github_link VARCHAR(500),
  live_link VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100), -- Will store subject from frontend
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample projects
INSERT INTO projects (title, description, github_link, live_link) VALUES
('Netflix Clone', 'Frontend Netflix replica with video streaming, and personalized recommendations.', 'https://github.com/Moges741/using-api', 'https://trailer-app-clone.netlify.app/'),
('Amazon Clone', 'E-commerce platform with shopping cart, payment processing.', 'https://github.com/Moges741/Amazon-Project', 'https://amazon-gebeya.vercel.app/'),
('Evangadi Forum', 'Community forum platform for questions, answers, and discussions with real-time updates.', 'https://github.com/Moges741/evangadi_forum', 'https://studentsforum.vercel.app/'),
('RealEstate Platform', 'Property listing website with search filters, virtual tours, and agent connections.', 'https://github.com/Moges741/RealState', 'https://realestate.moges.com');