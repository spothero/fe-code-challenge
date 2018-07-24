# SpotHero FE Coding Challenge
Create a dynamic web page/app that given a JSON file of parking spots can display a user interface which offers a header, a scrollable list and a detail modal.

## Prerequisites
* node/npm

## Requirements
* Stay as close to the following designs as possible ([spot-list.png](http://res.cloudinary.com/spothero/image/upload/v1523561073/spot-list_tflnfe.png) and [spot-list-with-open-detail-modal.png](http://res.cloudinary.com/spothero/image/upload/v1523561073/spot-list-with-open-detail-modal_udrrze.png)). We get it, we're giving you flat design assets so don't sweat exact colors and font-sizes.
    * The modal should be fixed width and height and scrollable.
    * List items should have a darker gray hover state.
* The application should consume the `Sample Parking Spot Data` (below) from an external file and dynamically generate and template the parking spot results.
* Clicking “Details” should open a modal which displays the related spot “title" and “description”.

## Directions
You may use any open source tools you wish to satisfy the requirements.

1. Fork this repository to your own GitHub account.
1. Run `npm install` to download all necessary dependencies.
1. Run `npm run db` to serve the API *(see API notes below)*.
1. Implement your solution.
1. Document any necessary instructions in the *Setup* section below.
1. Download your fork as a zip file and upload it to the relevant location within [Greenhouse](http://greenhouse.io).

## API
The API lives at `http://localhost:8000/api`.

Available routes include:
* `/spots` - Get a list of available spots.
* `/spots/:id` - Get a spot by `id`.

## Notes
* This is your opportunity to show off your preferred project structure, framework and/or tooling.
* Would anything here make sense to unit test?
* Use [Open Sans](https://fonts.google.com/specimen/Open+Sans) from Google Fonts.

## Setup
*Your setup notes go here, if applicable.*
