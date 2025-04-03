# 🎥 Cinetag - Video Streaming Platform

## Overview
Cinetag was developed as part of the React course in the Alura and Oracle Next Education (ONE) program. The objective was to build a React-based API from scratch, following a Figma design. The project utilizes `json-server` to create a dynamic API and practice essential React functionalities.

![Cinetag Home Page](https://github.com/dharitcha/cinetag/assets/157736779/55c89764-b003-455d-b4e3-078a0023e879)

## Features
- **React Framework:** Created using `Create React App`.
- **Component-based Architecture:** Modular and reusable components.
- **React Router Dom:** Enables seamless navigation between pages.
- **React Hooks:** Implements `useContext()`, `useEffect()`, `useState()`, and `useParams()`.
- **API Interaction:** Fetches and manages data with `json-server`.
- **Module CSS:** Uses `module.css` for customized styling.

### Video Management and Favorites
- Users can store and watch videos directly on the platform.
- Videos can be marked as favorites dynamically.
- Includes a **customized 404 error page** for non-existent URLs.

![Custom Error Page](https://github.com/dharitcha/cinetag/assets/157736779/97571271-d7a1-4b4b-95a9-e843ec064bc5)

## Technologies Used
- **React**
- **json-server**
- **JavaScript (ES6+)**
- **CSS (Module-based)**

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/cinetag.git
   ```
2. Navigate to the project folder:
   ```sh
   cd cinetag
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Start the mock API server:
   ```sh
   json-server --watch db.json --port 3000
   ```
6. Open the project in your browser.

## Live Demo
You can access the live version here: **[Cinetag on Vercel](https://cinetag-livid-zeta.vercel.app/)**

⚠ **Note:** Full functionality requires `json-server` to be running locally.

## License
This project is open-source and available under the MIT License.
