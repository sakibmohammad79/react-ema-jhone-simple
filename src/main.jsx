import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProviders from './components/Provider/AuthProviders';
import PrivateRoutes from './components/Route/PrivateRoutes';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
