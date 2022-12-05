# List.it

Lit.it is a personal task management tool that allows you to organize tasks via lists.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

Fork and clone this branch to set up your local copy of the front-end.

List.it makes use of a custom API, for which a repo and instructions can be found [here](https://github.com/rreymundi/phase-3-project-backend/blob/main/README.md).

Once the backend is up and running, you can run the following commands from this project's directory to run the app:

### `npm install @mui/material @emotion/react @emotion/styled`

This app makes us eof Material UI components.

### `React`

    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",

### `React Router Dom`

The app routes were set up using React Router Dom v6

    "react-router-dom": "^6.4.2",

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features

List.it is comprised of three pages, each of which has a set of available features to help manage tasks:

- My lists
    - Add lists
    - Add tasks
    - Mark tasks as "important"
    - Check tasks to mark them as "complete"
    - Edit list names
    - Delete lists
    - Edit task names & descriptions
- Important tasks
    - Un-mark tasks to downgrade and send them back to the "My lists" page
    - Check tasks to mark them as "complete"
    - Edit task names & descriptions
- Completed tasks
    - Un-check tasks to downgrade and send them back to the "My lists" page
    - Delete tasks
    - Edit task names & descriptions

All actions are set to persist via the back-end.

## Demo

Check out a demo of List.it [here](https://youtu.be/xhb5Ozqw3Hk).