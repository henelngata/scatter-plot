# Doping in Professional Bicycle Racing - Scatter Plot

This project is a data visualization of doping allegations in professional bicycle racing, created using D3.js. It displays a scatter plot of cyclist performance over time, highlighting those with doping allegations.

## Project Overview

This scatter plot visualizes the relationship between a cyclist's finishing time and the year of the race, with additional information about doping allegations. The project is part of the FreeCodeCamp Data Visualization certification.

## Features

- Interactive scatter plot created with D3.js
- Tooltip displaying detailed information on hover
- Color-coded data points to distinguish between cyclists with and without doping allegations
- Responsive design
- Meets all user stories required by FreeCodeCamp

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- D3.js (version 7)

## Setup and Running the Project

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Due to browser security restrictions, you need to serve this project from a web server. You can use one of the following methods:
   - Use a simple HTTP server like Python's `http.server`:
     ```
     python -m http.server
     ```
   - Use a Node.js-based server like `live-server`:
     ```
     npx live-server
     ```
4. Open your web browser and navigate to `http://localhost:8000` (or whatever port your server is using).

## Data Source

The data for this project is fetched from:
https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json

## Testing

This project includes the FreeCodeCamp test suite. To run the tests:

1. Load the project in your browser.
2. You should see a "hamburger" menu in the top-left corner of the page.
3. Click on this menu and select "Scatter Plot" from the dropdown.
4. Click "Run Tests" to see which tests pass and which fail.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Data provided by FreeCodeCamp
- Created as part of the FreeCodeCamp Data Visualization certification
