# SpotHero FE Coding Challenge
Develop a single page application (SPA) that runs through a fictitious SpotHero checkout flow.

## Requirements
* Stay as close to the following designs as possible:
    * [Search](./screens/search.jpg)
    * [Spot Details modal](./screens/search-modal.jpg)
    * [Checkout](./screens/checkout.jpg)
    * [Checkout validation](./screens/checkout-errors.jpg)
    * [Confirmation](./screens/confirmation.jpg)
* Use the API defined below to load spot data and purchase a spot.
* The SPA should have logical routing in place.
* Modals should animate in and out gracefully, not just appear/disappear.
* Email and phone number are *required* and should **have some form of validation applied** with applicable error messaging.
* Where applicable, any data should come from either the API or from user input.

## Prerequisites
* node/npm

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
* `GET /spots` - Get a list of available spots.
* `GET /spots/:id` - Get a spot by `id`.
* `POST /reservations` - Purchase a spot.
    ```
    {
        spotId: int,
        firstName: string (optional),
        lastName: string (optional),
        email: string,
        phone: string
    }
    ```

## Notes
* This is your opportunity to show off your preferred project structure, framework and/or tooling.
* Would anything here make sense to unit/integration test?
* Use [Open Sans](https://fonts.google.com/specimen/Open+Sans) from Google Fonts.
* Remember, the devil is in the details :)

## Solution Setup
*Your setup notes go here, if applicable.*
