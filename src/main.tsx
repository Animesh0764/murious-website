// index.tsx
import { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router.tsx';
import './App.css';
import Loader from './components/Loader.tsx';
import '../public/css/Loader.css';
import Navbar from './components/Navbar.tsx';

const Root = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

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

ReactDOM.render(<Root />, document.getElementById('root'));
