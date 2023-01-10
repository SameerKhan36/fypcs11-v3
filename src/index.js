import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>FYPCS11 DASHBOARD</h1>,
  },
  {
    path: "/login",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
