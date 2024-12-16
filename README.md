
# **TravelSync Front-End**

**Description**  
TravelSync Front-End is the dynamic and interactive user interface for the TravelSync application, enabling users to create, manage, and collaborate on group itineraries seamlessly. Initially developed as part of an Agile group project, the front-end was extended and refined independently to enhance functionality and usability.

The original group repository can be found here:  
[TravelSync Front-End Group Repository](https://github.com/dudleyspence/TravelSync-FE-Group.git)

---

## **Features**

- **Interactive Map Integration**: Visualise and manage location-based data with Mapbox.
- **Lottie Animations**: Animations for loading states enhance the user experience.
- **Drag-and-Drop Itinerary Management**: Reorder, add, or remove itinerary items easily using React-Beautiful-DnD.
- **User Authentication**: Secure login and user management powered by Firebase Authentication.
- **File Management**: Upload, download, and delete trip-related files using React-Dropzone.
- **Dynamic User Interfaces**: Fully responsive design for seamless use across devices.

---

## **Technologies Used**

- **React**: Modular and component-based front-end framework.
- **React Router**: Declarative routing for navigation between pages.
- **Mapbox**: Visualisation of location-based data on interactive maps.
- **Axios**: HTTP client for API integration.
- **CSS Modules**: Scoping styles to individual components.

---

## **Installation**

### **Prerequisites**

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)

### **Steps**

1. Clone the repository:

    ```bash
    git clone https://github.com/dudleyspence/TravelSync-FE-Extended.git
    cd TravelSync-FE-Extended
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    REACT_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
    REACT_APP_API_BASE_URL=https://travelsync-api-production.up.railway.app
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Build for production:

    ```bash
    npm run build
    ```

---

## **Usage**

1. Start the development server using the installation steps above.
2. Open your browser and visit `http://localhost:3000` to access the application.
3. Manage your itineraries, upload files, and visualise trip plans using the intuitive UI.

---

## **Key Components**

- **`App.jsx`**: The core of the application, coordinating routes and global state.
- **`ItineraryPage.jsx`**: Handles itinerary management, allowing users to add, delete, and reorder destinations.
- **`MapPage.jsx`**: Integrates Mapbox for displaying visual, interactive maps of trip locations.
- **`Auth`**: Ensures secure login, logout, and registration with Firebase Authentication.
- **`FilesPage.jsx`**: Manages file uploads, downloads, and deletions for trip-related documents.
- **`Homepage.jsx`**: Provides a welcoming overview and navigation hub for the application.

---

## **API Integration**

TravelSync Front-End communicates with the TravelSync API to handle:

- **CRUD Operations**: Manage itineraries, destinations, and other resources.
- **User Authentication**: Ensure secure access and user actions.
- **Location Data Retrieval**: Leverage Google Places for fetching location-based information.

Axios is utilised for all HTTP requests to streamline interactions with the API.

---

## **Future Enhancements**

- **Enhanced Itinerary Sharing**: Add the ability to share itineraries directly via links or email.
- **Offline Mode**: Introduce caching to allow users to access trip details without internet connectivity.
- **Dark Mode**: Provide an optional dark theme for better accessibility and usability.

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request for review.

---

## **Related Repositories**

<div align="center">
    <table>
        <tr>
            <td align="center" width="50%">
                <a href="https://github.com/dudleyspence/TravelSync-API-Extended">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=dudleyspence&repo=TravelSync-API-Extended&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=0f172a&hide_border=true&locale=en" />
                </a>
            </td>
            <td align="center" width="50%">
                <a href="https://github.com/dudleyspence/TravelSync-FE-Extended">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=dudleyspence&repo=TravelSync-FE-Extended&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=0f172a&hide_border=true&locale=en" />
                </a>
            </td>
        </tr>
        <tr>
            <td align="center" width="50%">
                <a href="https://github.com/dudleyspence/TravelSync-FE-Group">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=dudleyspence&repo=TravelSync-FE-Group&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=0f172a&hide_border=true&locale=en" />
                </a>
            </td>
            <td align="center" width="50%">
                <a href="https://github.com/dudleyspence/TravelSync-API-Group">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=dudleyspence&repo=TravelSync-API-Group&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=0f172a&hide_border=true&locale=en" />
                </a>
            </td>
        </tr>
    </table>
</div>

