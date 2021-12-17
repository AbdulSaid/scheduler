# Interview Scheduler

## Setup

Install dependencies with `npm install`. 

## Project Description

This is single page React application that is used to schedule appoints between students and mentors. This project has been developed with Test driven development. I have used the `jest` library for unit testing. I have using `storybook` for testing in an isolated environment, and used `cypress` for end-to-end testing. 

## Screenshots
When you first open the app you will see a homescreen that looks like the image below. 

![This is the main screen](https://github.com/AbdulSaid/scheduler/blob/master/public/images/main.png?raw=true)

Clicking on the (+) sign will open a new form to insert new appointment details.

![This is adding new items to the appointment form](https://github.com/AbdulSaid/scheduler/blob/master/public/images/form.png?raw=true)

This shows when the form is completed. The name and interviewer is selected. 

![This is a form with added items](https://github.com/AbdulSaid/scheduler/blob/master/public/images/enter.png?raw=true)

After sucessful save of the appointment, the specific time in the day is blocked off with the new appointment.

![This is the for after it got saved](https://github.com/AbdulSaid/scheduler/blob/master/public/images/edited.png?raw=true)


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress Tests
```sh
npm run cypress
```
