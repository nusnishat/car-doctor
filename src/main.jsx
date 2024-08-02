import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import CheckOut from './Pages/Shared/CheckOut.jsx';
import Bookings from './Pages/Bookings/Bookings.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/checkOut/:id",
        element:<CheckOut></CheckOut>,
        loader: ({params})=> fetch(`http://localhost:5000/checkOut/${params.id}`)
      },
      {
        path:"/bookings",
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
)
