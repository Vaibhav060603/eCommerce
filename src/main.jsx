import React from 'react';
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Bag from './components/Bag.jsx';
import HomeItems from './components/HomeItems.jsx';
import {ReduxStore} from "./store/ReduxStore.js"                                                       
import {Provider} from "react-redux";


const item = [{
  id: '002',
  image: './public/2.jpg',
  company: 'CUKOO',
  item_name: 'Women Padded Halter Neck Swimming Dress',
  original_price: 2599,
  current_price: 1507,
  discount_percentage: 42,
  return_period: 14,
  delivery_date: '10 Oct 2023',
  rating: {
      stars: 4.3,
      count: 24
  }}
];

const router = createBrowserRouter([
  {
    path: "/shop",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [                                                        
      {
        path: "/shop/items",
        element: <HomeItems />,
      },
      {
        path: "/shop/mens",
        element: <HomeItems />,
      },
      {
        path: "/shop/womens",
        element: <HomeItems />,
      },
      {
        path: "/shop/bag",
        element: <Bag item={item}/>
      }

      

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore}> 
      <RouterProvider router={router} />                                
    </Provider>
  </React.StrictMode>,
)
