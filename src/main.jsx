import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './components/AddChocolate.jsx';
import AddingChocolate from './components/AddingChocolate/AddingChocolate.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/addchocolate',
    element: <AddChocolate></AddChocolate>
  },
  {
    path: '/addingchocolate',
    element: <AddingChocolate></AddingChocolate>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
