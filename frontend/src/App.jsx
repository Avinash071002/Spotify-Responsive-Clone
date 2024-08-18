import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Provider } from 'react-redux';
import store from './components/states/store';
import { AppProvider } from './components/states/Context';
//import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
      <Provider store={store}>
        <AppProvider>
      <BrowserRouter>
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />


    </Routes>
      </BrowserRouter>
      <ToastContainer
position="bootom-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </AppProvider>
      </Provider>
    
  );
};

export default App;
