import React from 'react';
import ReactDOM from 'react-dom/client';
import index from './index.css'
import App from './App';
import Bakery from './pages/Bakery'
import Books from './pages/Books'
import BookClub from './pages/BookClub'
import Shop from './pages/Shop'
import Register from './pages/Register'
import ThankYou from './pages/ThankYou'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import { Context } from './Context';



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Bakery",
    element: <Bakery />
  },
  {
    path: "Books",
    element: <Books />
  },
  {
    path: "BookClub",
    element: <BookClub />
  },
  {
    path:"Shop",
    element: <Context><Shop /></Context>
  },
  {
    path:"Register",
    element: <Register />
  },
  {
    path:"Checkout",
    element: <Checkout />
  },
  {
    path:"ThankYou",
    element: <ThankYou />
  }
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}>
  </RouterProvider>
);
