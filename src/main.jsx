import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import IsNotAuthenticated from './auth/IsNotAuthenticated';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './common/Dashboard';
import Home from './common/Home';
import './index.css'
import AdminLayout from './layouts/AdminLayout';
import Layout from './layouts/Layout';
import Register from './auth/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "admin",
        element: <PrivateRoute component={AdminLayout} aId={2} />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },

        ]
      },
      {
        path: "",
        element: <IsNotAuthenticated component={Layout} />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "",
            element: <Home />
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
