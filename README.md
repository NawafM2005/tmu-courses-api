# TMU Courses API

A comprehensive dataset and API for Toronto Metropolitan University (TMU) programs and courses.

---

## Overview

This project provides:

- **A public REST API server** hosted at [https://tmu-courses-api.onrender.com](https://tmu-courses-api.onrender.com) that serves TMU programs and course data.
- **An NPM package** (`tmu-courses-api`) to use the TMU courses data locally in your Node.js projects without needing network requests.

---

## Quick Start

### Using the Public API Server

You can directly fetch TMU programs and courses from the hosted API.

- **Base URL:** `https://tmu-courses-api.onrender.com`

**Endpoints:**

| Endpoint                | Description                      | Example Request                          |
|-------------------------|---------------------------------|----------------------------------------|
| `/programs`             | List all program names           | `GET https://tmu-courses-api.onrender.com/programs` |
| `/programs/:program`    | Get all courses for a program    | `GET https://tmu-courses-api.onrender.com/programs/Accounting` |
| `/course/:code`         | Get course details by course code| `GET https://tmu-courses-api.onrender.com/course/ACC 100` |

**Example using `curl`:**

```bash
curl https://tmu-courses-api.onrender.com/programs
