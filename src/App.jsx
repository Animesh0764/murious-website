// App.tsx
import { FirebaseProvider } from './context/firebase';
import Router from './router/router';

function App() {
  return (
    <FirebaseProvider>
      <Router />
    </FirebaseProvider>
  );
}

export default App;
