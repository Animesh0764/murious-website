import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';
import './App.css';
import Loader from './components/Loader';
import '../public/css/Loader.css';
import Navbar from './components/Navbar';

const Root = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 6500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {showLoader ? (
        <Loader />
      ) : (
        <Router />
      )}
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);