# Smart Store app

The [Smart Store app](https://ilhan007.github.io/ui5con-app) is a [React](https://reactjs.org/) sample application, demonstrating the usage of the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents). You can find a step by step tutorial below on how to build the app yourself.

Note: no previous experience with [UI5 Web Components](https://github.com/SAP/ui5-webcomponents) is required.
To take the most of the tutorial, a basic knowledge with [React](https://reactjs.org/) is desirable.

## Prerequisites
- [Node.js](https://nodejs.org/) (**version 8.10 or later**)

## Short story

The Smart Store app enables a store manager to control his/her multiple stores. It provides the most important information and status of the stores and urgent tasks that should be addressed by the store manager.

## Getting started

1. Bootstrap the app with [Create React App](https://github.com/facebook/create-react-app#creating-an-app) executing the following commands in your terminal.

	```sh
	npm init react-app smart-store-app
	cd smart-store-app
	npm install
	```

2. Install the UI5 Web Components.

	```sh
	npm install @ui5/webcomponents
	```

3. Consume the UI5 Web Components.

	All the components can be imported from ```"@ui5/webcomponents/dist/<component_name>";```
	Import one of the available components in the ```src/App.js```.
	```js
	import "@ui5/webcomponents/dist/Button"; // loads ui5-button
	```
 
	Then, you can add the ```ui5-button``` in ```src/App.js``` and that`s it! You should see the ```ui5-button``` rendered on the screen.

	```js
	function App() {
		return (
			<ui5-button>Hello world!</ui5-button>
		);
	}
	```
4. Launch the app.
	```sh
	npm start
	```
## Build the Smart Store app

### Home page
### Details page

## Resources
[Smart Store app](https://ilhan007.github.io/ui5con-app)

[Sources of Smart Store App](https://github.com/ilhan007/ui5con-app)

[List of all available UI5 Web Components](https://sap.github.io/ui5-webcomponents/playground)	