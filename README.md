# GetSetFit

GetSetFit is a powerful React-based application that allows you to search for exercises and view recomended YouTube videos related to those exercises. Whether you're a fitness enthusiast looking to try out some new workouts or a personal trainer trying to find inspiration for your clients, GetSetFit has got you covered.

==Because who needs a personal trainer when you can have an algorithm?==

The app uses the RapidAPI to fetch data on exercises and for the related YouTube videos. Additionally, Material-UI has been used to ensure a smooth and responsive user interface.


## Configuration

The application requires two API keys to function properly: a RapidAPI key and a YouTube API key. The RapidAPI key is used to fetch data on exercises, and the YouTube API key is used to fetch video data.

To obtain a RapidAPI key, follow these steps:

1. Sign up for a RapidAPI account at https://rapidapi.com/.
2. Search for the "exerciseDB API" and select it.
3. Subscribe to the API and obtain an API key.

To obtain a youtube-search-and-download API key, follow these steps:

1. Sign in to the Google Cloud Console at https://rapidapi.com/.
2. Search for the "youtube-search-and-download API" and select it.
3. Subscribe to the API and obtain an API key.


## Installation

To install this project on your local machine, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/mrworld196wide/GetSetFit.git`.
2. Install the required dependencies with `npm install`.
3. Create a `.env` file in the root directory of the project and add your RapidAPI's exercisedb and youtube-search-and-download API's keys in the following format:
```
REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
YOUTUBE_SEARCH_AND_DOWNLOAD_API_KEY=your-youtube-api-key
```
4. Start the development server with `npm start`.


## Usage

To use the application, follow these steps:

1. Open the application in your browser at: `http://localhost:3000`
2. Use the search bar to search for exercises.
3. Click on an exercise card to view about the exercise and the YouTube videos related to that exercise.

## Contributing

Thank you for considering contributing to GetSetFit! If you would like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch.
2. Commit your changes to the new branch.
3. Push your changes to your fork and submit a pull request to the master branch of the original repository.
4. Be sure to include a detailed description of your changes in the pull request.



