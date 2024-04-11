import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import store from "./features/store";
import MainLayout from './layouts/MainLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>

  </Provider>
)
