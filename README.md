# TMU Courses API

A comprehensive dataset and API for Toronto Metropolitan University (TMU) programs and courses.

---

## 🧭 Overview

This project provides:

- **A public REST API server** hosted at [https://tmu-courses-api.onrender.com](https://tmu-courses-api.onrender.com) to fetch TMU programs and course data.  
- **An NPM package** (`tmu-courses-api`) for local, offline access to the same data in any Node.js project — no internet required.

---

## 🚀 Quick Start

### 📡 Using the Public API Server

Fetch TMU programs and courses directly from our hosted API.

**Base URL:**  
https://tmu-courses-api.onrender.com

#### 🔗 Available Endpoints

| Endpoint                | Description                        | Example Request                                                                 |
|------------------------|------------------------------------|---------------------------------------------------------------------------------|
| `/programs`            | Get all program names              | GET https://tmu-courses-api.onrender.com/programs                               |
| `/programs/:program`   | Get all courses in a program       | GET https://tmu-courses-api.onrender.com/programs/Computer Science              |
| `/course/:code`        | Get course details by course code  | GET https://tmu-courses-api.onrender.com/course/CPS 109                         |

#### 💡 Example Usage (via curl)

    # Get all programs
    curl https://tmu-courses-api.onrender.com/programs

    # Get courses for a specific program
    curl https://tmu-courses-api.onrender.com/programs/Accounting

    # Get specific course details
    curl https://tmu-courses-api.onrender.com/course/ACC 100

---

### 📦 Using the NPM Package

Install the package in your Node.js project:

```bash
npm install tmu-courses-api
```

Then use it in your code:

```js
const tmuCourses = require('tmu-courses-api');

// 🔹 Get all program names
console.log(tmuCourses.getPrograms());

// 🔹 Get all courses in a specific program
console.log(tmuCourses.getCourses("Computer Science"));

// 🔹 Search for courses by keyword (code or title)
console.log(tmuCourses.searchCourses("CPS"));
```

---

## ✅ Available Functions

| Function                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `getPrograms()`          | Returns an array of all TMU program names                                   |
| `getCourses(name)`       | Returns an array of courses for the given program name                      |
| `searchCourses(keyword)` | Returns all courses where the code or title includes the keyword (case-insensitive) |

---

## 📚 Data Sources

All data is scraped and parsed from the [Toronto Metropolitan University Official Academic Calendar](https://www.torontomu.ca/calendar/) and regularly updated to reflect the latest curriculum.

---

## 🤝 Contributing

We welcome contributions! You can:

- 🐛 Report issues or data inaccuracies via [GitHub Issues](../../issues)
- 🌟 Suggest new features or endpoints
- 🔧 Submit pull requests for improvements or bug fixes

---

## 📄 License

MIT © 2023–2025 Nawaf Mahmood — TMU Courses API
