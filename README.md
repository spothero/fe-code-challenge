# SpotHero FE Coding Challenge
Complete the two stories below to finalize a fictitious SpotHero checkout flow.

## Prerequisites
* node/npm

## Story #1
### Background
Users want to see details about a spot before purchasing it.

### Requirements
Implement a modal that shows the spot details. Follow [the design](./screens/search-modal.jpg) provided by the product team.
* The modal should animate in and out gracefully, not just appear/disappear.

## Story #2
### Background
Users should be able to purchase a spot.

### Requirements
Add a form that takes user input, verifies it, and allows the user to hit the confirmation page. Follow [the design](./screens/checkout.jpg) provided by the product team.
* Email and Phone Number fields are required and should [display errors](./screens/checkout-errors.jpg) if not filled out correctly.
* Phone Number should only allow entry of digits. Bonus points for auto-formating to a US phone number (such as *(xxx) xxx-xxxx*).
* Adjust the confirmation page (if necessary) to ensure it works and renders correctly.
* Make sure that a second run through the flow and booking another spot updates all UI correctly.

## Directions
You may use any additional open source tools you wish to satisfy the requirements.

1. Fork this repository to your own GitHub account.
1. Run `npm install` to download all necessary dependencies.
1. Run `npm start` to serve the API *(see API notes below)* and spin up the local development environment.
1. Implement your solution.
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
* Would anything here make sense to unit/integration test?
* Remember, the devil is in the details :)
