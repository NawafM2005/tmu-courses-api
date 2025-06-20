const express = require('express');
const cors = require('cors');

// Import Data
const coursesData = require('./courses.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Get all programs
app.get('/programs', (req, res) => {
  res.json(Object.keys(coursesData)); // Keys in the JSON are the programs
});

// Get all courses in a program
app.get('/programs/:program', (req, res) => {
  const program = req.params.program; // Get program parameter
  const courses = coursesData[program]; // Get courses in the JSON in that program
  if (!courses) return res.status(404).json({ error: 'Program not found' });
  res.json(courses);
});

// Get course by code (e.g., ACC 100)
app.get('/course/:code', (req, res) => {
  const requestedCode = req.params.code.toUpperCase(); // Get the code from the URL

    let foundCourse = null; // Start with nothing found

    // Go through each program
    for (let programName in coursesData) {
    // Get the list of courses in this program
    let courseList = coursesData[programName];

    // Go through each course in the list
    for (let i = 0; i < courseList.length; i++) {
        let currentCourse = courseList[i];

        // Compare the course code
        if (currentCourse.code.toUpperCase() === requestedCode) {
        foundCourse = currentCourse;
        break; // Stop once we find the course
        }
    }

    if (foundCourse) break; // Stop looking once found
    }

    // If we found a course, send it back
    if (foundCourse) {
    res.json(foundCourse);
    } else {
    // If not found, send an error
    res.status(404).json({ error: 'Course not found' });
    }
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
