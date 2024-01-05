import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  createHashRouter
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from './pages/error-page';
import reportWebVitals from './reportWebVitals';
import ArtificialIntelligence from './pages/artificial-intelligence';
import HomePage from './pages/home';
import Brewing from './pages/brewing';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: 'true',
        element: <HomePage />
      },
      {
        path: "/artificial-intelligence",
        element: <ArtificialIntelligence />
      },
      {
        path: "/brewing",
        element: <Brewing />
      },
    ],
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
