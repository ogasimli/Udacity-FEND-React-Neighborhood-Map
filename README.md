# Neighborhood Maps Project

## Project Overview

The goal of this project is to create a single-page application using React featuring a map of the neighborhood. The application uses the Google Maps API to display points of interest ("POI") in my vicinity, and pulls detailled information from FourSquare's Venues API. Additionally, presents a filterable list of location names, and updates the markers according to the search query.

## App Functionality

In this application, the main page displays a list of POIs and the map containing the markers of the POIs.

<img src="./screenshots/home_screen.png" alt="initial Image app 1" width="650">

There is also map containing all the marker and additional information provided by 3rd party API provider displayed via the InfoWindow.

<img src="./screenshots/info_window.png" alt="initial Image app 1" width="650">

User may filter places list using the search input located over the map.

<img src="./screenshots/search.png" alt="initial Image app 1" width="650">

The app is very responsive and provides outstanding design for mobile users.

<img src="./screenshots/mobile.png" alt="initial Image app 1" width="350">

## Installation

To run this app you will have to have [**Node.js**](https://nodejs.org/en/) and [**npm**](https://www.npmjs.com/get-npm) installed in your machine.

Please follow below instructions to run the project in your machine:

1. Clone repository to your local disk
2. Open terminal and navigate to the project folder
3. Run `npm install` command from terminal to install all npm dependencies
4. Run `npm start` command to compile project and run a **dev version** of the application

## Data Attribution

Data for the InfoWindows connected to the map markers is provided by FourSquare's venue details API. Details on the API can be found [here](https://developer.foursquare.com/docs/api/venues/detail).