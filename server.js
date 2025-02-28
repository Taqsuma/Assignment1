const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors()); // Allow frontend requests
app.use(express.json());

const overview = {
  name: "Taqsuma Fazren",
  title: "Software Developer",
  description: "A passionate software developer with a strong foundation in full-stack development...",
};

const education = [
  {
    degree: "Advanced Diploma in Computer Programming",
    institution: "Humber College",
    year: "2023 - 2026",
    gpa: "3.9"
  }
];

const experience = [
  {
    position: "Software Developer Intern",
    company: "Tech Company Inc.",
    duration: "2024 - Present",
    details: [
      "Developed RESTful APIs using Node.js and Express.",
      "Built UI components in React.",
      "Integrated third-party payment APIs like bKash for e-commerce solutions."
    ]
  },
  {
    position: "Software Developer Intern",
    company: "ABC Tech Solutions",
    duration: "May 2023 – August 2023",
    details: [
      "Designed and built responsive React.js components to enhance user engagement.",
      "Optimized backend services using Node.js and MongoDB.",
      "Implemented authentication and authorization using JWT tokens and OAuth."
    ]
  }
];

app.get('/getOverview', (req, res) => {
  res.json(overview);
});

app.get('/getEdu', (req, res) => {
  res.json(education);
});

app.get('/getExp', (req, res) => {
  res.json(experience);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
