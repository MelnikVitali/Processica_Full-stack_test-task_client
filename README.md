# Processica test task Full-stack Developer Client React.js

[Deployed App on Netlify](https://processica-fullstack.netlify.app/)

Author: Vitalii Melnyk

## Technology Stack

- React with React Hooks
- React styles & libraries: Material-UI
- Formik and Yup
__________________________________________________________________
## Objective of the Test Project for Full-stack JavaScript Developer vacancy
Create a simple Node Express Web Application, which uses RESTful API to communicate with server.
Result code should be clean as much as possible, here is target not just working use case, but better code as possible.
Project can be delivered in any way you want, public repo of Bitbucket, GitHub etc.
__________________________________________________________________
## Technical Requirements

### UI code:
1. Form, build with any client-side framework with next inputs::
- textarea field "Input";
- textarea field "Output";
- button "Proceed";
2. By clicking the "Proceed" button send Input text to the server to an API POST endpoint.
3. Server do some logic and return response in JSON format.
4. Response should be displayed in the Output field, in next format: sorted words (only words without punktuation marks and symbols) in ascending order, with count of the entries in the text, and count of the unique words. Example:


Hello world and hello Earth. Hello universe.


And - 1

Earth - 1

Hello - 3

Universe - 1

World - 1

Unique: 5

### Server code:
1. REST endpoint to process requests from the UI.
2. When controller received data, need to calculate count of unique words and their entries in the text.
3. Return response with a JSON body (in any format, which you like to use) to the UI.
4. If request is without words API must return appropriate HTTP code.

  _________________________________________________________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
