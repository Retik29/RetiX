// src/data/portfolioData.js

export const personalData = {
  name: "Retik Kumar Yadav",
  firstName: "Retik",
  lastName: "Yadav",
  role: "Full Stack Developer",
  tagline: "Crafting scalable, high-performance web applications with React, Node.js, and modern cloud ecosystems.",
  about: "I'm a Full Stack Developer passionate about building robust, user-centric applications. With a strong foundation in modern JavaScript ecosystems and an eye for polished UI/UX, I bridge the gap between complex engineering and elegant design.",
  email: "retiknyadav614@gmail.com",
  phone: "+91 9883628859",
  github: "https://github.com/Retik29",
  linkedin: "https://linkedin.com/in/retik"
};

export const educationData = [
  { degree: "B.Tech Computer Science & Engineering", school: "Lovely Professional University", location: "Punjab", score: "CGPA: 7.95", year: "Aug '23 – Present" },
  { degree: "Intermediate (PCM)", school: "Bidhan Chandra Institution", location: "Durgapur, WB", score: "77%", year: "Mar '21 – May '23" }
];

export const certificatesData = [
  { course: "Bits and Bytes of Computer Networking", platform: "Coursera", date: "2024", pdf: "/BitsandBytes.pdf" },
  { course: "Cloud Computing", platform: "NPTEL", date: "2024", pdf: "/CloudComputing.pdf" },
  { course: "Cloud Computing and DevOps", platform: "Google Cloud", date: "2024", pdf: "/DevOps.pdf" }
];

export const resumeData = {
  pdf: "/RetikYadav-12322762.pdf",
  size: "150KB"
};

export const skillsData = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' }
];

export const projectsData = [
  { id: 1, title: 'Lumina', desc: 'Mental health platform with role-based scheduling and AI-powered chatbot support.',
    image: '/lumina.png',
    demo: 'https://lumina-peace.vercel.app/', github: 'https://github.com/Retik29',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'] },
  { id: 2, title: 'InsightDrive', desc: 'Fleet mapping feedback & analytics enabling live telemetry and real-time dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    demo: 'https://github.com/Retik29/InsightDrive', github: 'https://github.com/Retik29/InsightDrive',
    tech: ['React', 'Express', 'Socket.IO'] },
  { id: 3, title: 'FixEasy', desc: 'Technician-finder platform for seamlessly locating verified service providers.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    demo: 'https://github.com/Retik29/FixEasy', github: 'https://github.com/Retik29/FixEasy',
    tech: ['Node.js', 'Express', 'JWT'] }
];
