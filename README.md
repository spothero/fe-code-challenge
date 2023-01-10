# SpotHero FE Coding Challenge V2
This exercise will consist of a planning and technical refinement session for a mock refactor of the application contained in this repository.  This will occur during the live interview & candidates **_are not_** expected to complete any of the refactoring prior.  Instead they're to be provided access to this codebase in advance of the interview as an opportunity to review the code in preparation for the session.

It's important to note that the candidate is not expected to refactor the entire application nor do we expect the application to even run.  The goal here is to better understand the thought process and what it’s like to work alongside in planning and implementing some larger scale changes in a real working environment.  

## Prerequisites
* node/npm

## Background
The goal behind this refactor work is to basically give the codebase a bit of a facelift under the hood.  In it’s current state, the dependencies are quite a bit out of date, the build tooling isn’t the same as the rest of our frontend apps and there quite a few design patterns being used that could benefit from a more modern approach.  This application is one many in the suite of frontend applications that we maintain here at SpotHero.  Even though our frontend applications all have their own independent codebases, there are interdependencies we have to take into consideration.   

With that said, we’re going to have a high level discussion around the best approach to refactoring this app.  There will be [Key Focus Areas](#key-focus-areas) we want to tackle and along the way we’ll probably do a bit of coding together as well!

### Additional Context
* Our frontend apps all share the same internal UI library
* Our frontend apps all utilize an internal build tool that’s used to extend a default webpack configuration
* Our backend consists of multiple services with potentially different api base urls
* Right now, the app is pretty small.  But we expect over time that this app will get much larger, so let’s take that into consideration as we’re planning out possible architecture or state management changes. 

## Key Focus Areas
* Planning
    * Identify, prioritize & document target areas for refactor. 
    * Planning should  be kept very high level and focused on assessing impact of change while maintaining a reasonable scope.
* Dependencies/Build Tooling
    * What is the potential impact of updating dependencies
    * What  is  the impact of updating the build tooling
* State Management 
    * How  should we architect our global  state management  (i.e. redux) for maximum maintainability  and scalability
* API Implementation
    * How can  we clean up the api implementation to maximize testability, maintainability, scalability
* UI Components
    * What are some UI components we could potentially refactor for better composability.
* Documentation
  * Is there any documentation that should be made? 
  * How should we go about documenting the codebase?

## Directions
You may use any additional open source tools you wish to satisfy the requirements.

1. Download or clone this repository.
1. Run `npm install` to download all necessary dependencies.
1. Run `npm start` to serve the API *(see API notes below)* and spin up the local development environment.

## API
The API lives at `http://localhost:8001/api`.

Available routes include:
* `GET /spots` - Get a list of available spots.
* `GET /spots/:id` - Get a spot by `id`.
* `GET /reservations/:id` - Get a reservation by `id`
* `POST /reservations` - Purchase a spot.
    ```
    {
        spotId: int,
        email: string,
        phone: string,
        lastName: string,
        firstName: string,
    }
    ```

## Notes

* Even though you're not required to perform any actual changes to the code in advance, it's encouraged to thoroughly review the existing implementation in order to prepare to address the [key focus areas](#key-focus-areas) we'll be covering during the actual live interview.  
* Feel free to take notes in advance on what you'd like to cover during the interview.  Meaningful discussions and questions are encouraged! 
* If you are unfamiliar with [json-server](https://www.npmjs.com/package/json-server#filter), it may be worth the time to familiarize yourself with it
* Would anything here make sense to test?
* Remember, the devil is in the details
