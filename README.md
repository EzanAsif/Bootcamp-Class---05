
# ---------------    PIAIC BOOTCAMP    ---------------
# --------------------  CLASS-05 NOTES  ------------------


CONTEXT API (Saves data centrally and every comp can use it):
============================================================

Normally mien 1 jaga pe value hoti ha jo k component ko jati ha phr child aur phr grand child.Ismien data ki handling thori mushkl hojati ha.

Phr iska 1 solution aya REDUX aur CONTEXT API.

Abhi hum Context API ki baat krnge.

Context API hume 1 central location provide krti ha jaha hum apni state manage krte hn aur hum usko 1 poori tree (provider) batadete hn ismien data use hoga tou woh phr hume child se grand child tk data pass nhi krna hota.E.g agr Grand Child ko data chahiye tou woh upar waley comp pe nhi jaega blke woh seedha CONTEXT API se data uthalega. Which has made our data handling ez.

Agar kisi child comp mien uske parent k local variable ka data arha ha tou woh usko read tou krskta ha lkn update nhi

	createContext() : 
	
	React.createContext(); takes 2 parameters 
	
	1st --> value
	2nd -->
	
	
	<CounterContext.Provider value = {} />:
	isko value ka prop apko lazmi dena hoga
	
	useContext() : 
	- takes in a value
	- first time hum ne sirf context create kia tha
	use krne k lia usse call aur import alag se krna hoga
	
	
useReducer()
==============================


Reducer only to change the state

Switch case --> to know TYPE of change

Action{
	Type : 'INCREMENT' (example),
	The new value to change

}

dispatch(Action)

- takes two values : 
 1-Reducer function
 2-An initial state value.

- takes two values : 
 1-Reducer function
 2-An initial state value.

This hook is used to manage state. Sort of like useState, except more complex.

This is the key difference between useState and useReducer: with useReducer, state is altered by passing messages rather than calling the updater function.

A reducer is a pure function that calculates the next state based on the previous state and the action that has been dispatched.

(currentState, action) => newState

What does “pure function” mean? A pure function takes an input and returns an output without changing the input or anything else. This means that a reducer returns a completely new state that substitutes the previous one.
	
		
		         TO UPDATE
		==========================
		
		dispatch(name of the case)
	
	

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
# Bootcamp-Class---05
