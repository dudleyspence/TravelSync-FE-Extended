This project began as an Agile group for 4 taking part in a project phase. Once this phase ended I decided to independantly continue with the project.

This original group repository can be found here [https://github.com/dudleyspence/TravelSync-FE-Group](https://github.com/dudleyspence/TravelSync-FE-Group.git)


# TravelSync Front-End

Welcome to the TravelSync Front-End repository! This is the front-end component of the TravelSync application, designed to provide a dynamic and user-friendly 
interface for managing group itineraries. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Key Components](#key-components)
- [API Integration](#api-integration)

## Features

- **Interactive Map Integration**: Display and manage location-based data using Mapbox.
- **Lottie Animations**: Loading states are displayed with animations for a fun user experience.
- **Dynamic User Interfaces**: Responsive design for a seamless experience across devices.
- **User Authentication**: Secure login and user management with Firebase Authentication.
- **Drag-and-Drop Itinerary Management**: Easily add, remove, and rearrange locations in your itinerary using React-Beautiful-DnD.
- **File Management**: Upload, download, and delete files such as flight tickets and accommodation bookings using React-Dropzone.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Mapbox**: A mapping platform for location-based data visualization.
- **Axios**: Promise-based HTTP client for API integration.
- **CSS Modules**: CSS for component-specific styling.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/travelsync-frontend.git
    cd travelsync-frontend
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    REACT_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
    REACT_APP_API_BASE_URL= https://travelsync-api-production.up.railway.app
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

5. **Build for production**:

    ```bash
    npm run build
    ```

## Usage

After starting the development server, open your web browser and navigate to `http://localhost:3000` to access the application. The app will automatically reload if you make edits to the source files.

## Key Components

## Key Components

- **`App.jsx`**: The main application component that sets up routes and global state management, coordinating the overall functionality of the app.
- **`ItineraryPage.jsx`**: Manages the itinerary view, allowing users to add, remove, and reorder locations within their travel plans.
- **`MapPage.jsx`**: Integrates Mapbox to display location data on an interactive map, enhancing the user experience with visual, location-based features.
- **`Auth`**: Handles user authentication, providing functionality for login, logout, and registration to ensure secure access and user management.
- **`FilesPage.jsx`**: Allows users to upload, download, and delete files such as flight tickets and accommodation bookings, supporting file management for collaborative trip planning.
- **`Homepage.jsx`**: The landing page of the application, providing an overview and navigation to different parts of the app, such as itineraries, and join and create itineraries.


## API Integration

The front end communicates with the TravelSync API to perform CRUD operations on itineraries, authenticate users, and fetch location data from Google Places.
Axios is used to make HTTP requests to the backend.

