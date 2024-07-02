import React from 'react';
import ReactDOM from 'react-dom/client';
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Cakes from './pages/cakes';
import ShoppingCart from './pages/shoppingCart';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';
import About from './pages/about';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />, 
    errorElement: <p>Sorry!</p>
  },
  {
    path: "/cakes",
    element:<Cakes />, 
    errorElement: <p>Sorry!</p>
  },
  {
    path: "/shoppingCart",
    element:<ShoppingCart />, 
    errorElement: <p>Sorry!</p>
  },
  {
    path: "/login",
    element:<Login />, 
    errorElement: <p>Sorry!</p>
  },
  {
    path: "/signup",
    element:<Signup />, 
    errorElement: <p>Sorry!</p>
  },
  {
    path: "/contact",
    element:<Contact />, 
    errorElement: <p>Sorry!</p>
  },
  {
    path: "/about",
    element:<About />, 
    errorElement: <p>Sorry!</p>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);


