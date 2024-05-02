import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import HomePage from './pages/listkb.jsx'
import DetailsPage from './pages/details.jsx'
import Header from './components/navbar'
import Banner from './components/banner'
import Footer from './components/footer'
import Error from './components/error'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <Error />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>,
)
