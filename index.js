const coursesData = require('./courses.json');

function getPrograms() {
  return Object.keys(coursesData);
}

function getCourses(programName) {
  return coursesData[programName] || null;
}

function searchCourses(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  const results = [];

  for (const [program, courses] of Object.entries(coursesData)) {
    for (const course of courses) {
      if (
        course.code.toLowerCase().includes(lowerKeyword) ||
        course.title.toLowerCase().includes(lowerKeyword)
      ) {
        results.push({ program, ...course });
      }
    }
  }

  return results;
}

module.exports = {
  getPrograms,
  getCourses,
  searchCourses,
};
