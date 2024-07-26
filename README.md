# Movie Review Application

## Description
Movie Explorer is a web application where users can browse a collection of movies, watch trailers, and add reviews. The application provides a seamless experience for movie enthusiasts to explore new films and share their thoughts with others.

## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
- Node.js
- MongoDB
- Java (JDK 11 or higher)
- Maven

### Backend (Spring Boot)
1. Clone the repository:
    ```bash
    git clone https://github.com/piyuminadee/Movie-Reviews-Application-with-Springboot-MongoDB.git
    ```
2. backend :
   Create mongodb cluster and import belove data <br>
   <a href="https://github.com/piyuminadee/Movie-Reviews-Application-with-Springboot-MongoDB/blob/main/movies.json">backend data </a>

   
4. Install dependencies and build the project:
    ```bash
    mvn clean install
    ```
5. Run the Spring Boot application:
    ```bash
    MoviesApplication.java
    ```

### Frontend (React)
1. Navigate to the frontend directory:
2. Go to the template folder and navigate movie-gold-v1 folder
    ```bash
    cd movie-gold-v1
    ```
3. Install dependencies:
    ```bash
    npm install axios
    npm install bootstrap
    npm install react-bootstrap
    npm install @fortawesome/react-fontawesome
    npm install @fortawesome/free-solid-svg-icons
    npm i react-player
    npm i react-router-dom
    npm i @mui/material @emotion/react @emotion/styled
    npm i react-material-ui-carousel
    ```
4. Start the development server:
    ```bash
    npm start
    ```

    

## Technologies Used
- **Backend**: Java, Spring Boot
- **Frontend**: React
- **Database**: MongoDB

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
