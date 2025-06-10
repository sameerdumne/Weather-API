# Weatherly Backend

## Overview
Weatherly is a backend service that provides weather data through a RESTful API. It is built using Node.js and Express, allowing for easy integration with frontend applications.

## Project Structure
```
weatherly-backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── weatherController.js
│   ├── routes                # Defines API routes
│   │   └── weatherRoutes.js
│   └── utils                 # Utility functions for API calls
│       └── apiClient.js
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weatherly-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### Get Weather Data
- **Endpoint:** `/api/weather`
- **Method:** `GET`
- **Description:** Retrieves current weather data for a specified location.
- **Query Parameters:**
  - `location`: The name of the city or coordinates (latitude,longitude).

### Example Request
```
GET /api/weather?location=New York
```

### Response
```json
{
  "location": "New York, NY",
  "temperature": "72°F",
  "condition": "Sunny",
  "humidity": "65%",
  "windSpeed": "8 mph"
}
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.