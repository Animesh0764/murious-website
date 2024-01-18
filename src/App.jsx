// App.tsx
import { Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import About from './pages/About';
import { FirebaseProvider } from './context/firebase';

function App() {
  return (
    <FirebaseProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </FirebaseProvider>
  );
}

export default App;
