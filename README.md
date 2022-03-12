## Consuming the LOL Player APi

This project aims to elaborate a simple API request using React and Axios. Next, we will create a step-by-step guide of how the application was built to facilitate understanding and serve as a learning aid.

## Making the Reach APP

npx create-react-app LOL-consuming

_this comand creates the base of the React Application (for more, see https://create-react-app.dev/_

## Cleaning the React application

The create-react-app makes a 100% functional application, with a lot of services that are necessary to run the application clean. However, there's a lot of things that we will not to use and no need to be in our project. Start by cleaning the icons and Test. reportWebVitals and other things, leaving only what we are going to use:

node_modules (do not change this folder)
public
index.html
manifest.json
src  
 App.css
App.js
index.css
index.js
package-lock.json
package.json

Also clean the App.js archive, remaining only the function App () {
return (
<div className="App"></div>
)
}
