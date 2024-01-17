//main imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

//components import

//pages import
import App from './App.tsx';
import Loader from './components/Loader.tsx';

//CSS import
import '../public/css/Loader.css';

const Root = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 7500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      {showLoader ? (
        <Loader />
      ) : (
        <App />
      )}
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
