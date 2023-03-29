# odin-shopping-cart

## What is this about?

This toy project is a reinforcement to react-router-dom v6.9 and asynchronous workflow with [fakestoreapi](https://fakestoreapi.com/) to fetch products.
The design of the project is to showcase the understanding of concepts below:

- React-router-dom v6.9 (new features data-api):
  - loader
  - action
  - nested routes
- useContext
- useReducer
- CSS modules

The aim of this app is to build your simple and minimalist e-commerce with client side routing.

#### Note

- This project will not support for mobile devices
- A lot needs to be taken care of when using a mix of useEffect and a global store:
  1. Data fetching
  2. Request cancellation
  3. Loading state and error state handling Caching
  4. Stale data and revalidation
  5. Request waterfalls
- To address all these challenges we need to think about data from three different perspectives. How to perform network requests, where to store data, and when to initiate the requests.

- `How`: fetch native browser api
- `Where`: context & local storeage (limit stale states)
- `When` : react-router-dom v6.4+ (this project focal points) using new data-api solve waterfall problem requests.

# Getting Started with Vite

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Deploy the app using github-pages as a free host services.
