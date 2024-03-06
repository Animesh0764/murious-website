import { useState, useEffect } from "react";
import Murious from "../images/muriouslogo.webp";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useFirebase } from "../context/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { redirect } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Authentication = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [isSignUpMode2, setSignUpMode2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [user, setUser] = useState(null);

  const [isLogin, setIsLogin] = useState(true);

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const firebaseAuth = getAuth();
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 320);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const handleToggleSignUp = () => {
    setSignUpMode(!isSignUpMode);
  };

  const handleToggleSignUp2 = () => {
    setSignUpMode2(!isSignUpMode2);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const signupUserUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        const user = result.user;
        toast.success(`Successfully logged in as ${user.displayName || user.email}`);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to log in with Google');
      });
  }

  const signupUserUsingEmailandPassword = (email, password) => {
    const firebaseAuth = getAuth();
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        toast.success(`Successfully signed up as ${user.email}`);
        // You can redirect or perform any additional action here
      })
      .catch((error) => {
        // Error occurred during sign up
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  
  const signinUserUsingEmailandPassword = (email, password) => {
    const firebaseAuth = getAuth();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        toast.success(`Successfully signed in as ${user.email}`);
        // You can redirect or perform any additional action here
      })
      .catch((error) => {
        // Error occurred during sign in
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  

  const firebase = useFirebase();

  return (
    <div style={{ 
        maxWidth: '400px',
        margin: '10rem auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center'
      }}>
        <Toaster />
      <h2 style={{ color: '#ff69b4', fontSize: '2rem', marginBottom: '2rem' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form style={{ marginBottom: '20px' }}>
        {isLogin ? (
          <>
            <label htmlFor="login-email" style={{ display: 'block', marginBottom: '5px', color: '#ff69b4' }}>Email:</label>
            <input type="email" id="login-email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }} />
            <label htmlFor="login-password" style={{ display: 'block', marginBottom: '5px', color: '#ff69b4' }}>Password:</label>
            <input type={showPassword ? "text" : "password"} id="login-password" name="password" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#fff' }}>Login using your google account:</p>
              <br />
              <FaGoogle className="social-icon" fill="white" onClick={signupUserUsingGoogle}></FaGoogle>
            </div>
          </>
        ) : (
          <>
            <label htmlFor="signup-email" style={{ display: 'block', marginBottom: '5px', color: '#ff69b4' }}>Email:</label>
            <input type="email" id="signup-email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }} />
            <label htmlFor="signup-password" style={{ display: 'block', marginBottom: '5px', color: '#ff69b4' }}>Password:</label>
            <input type={showPassword ? "text" : "password"} id="signup-password" name="password" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }} />
            <label htmlFor="signup-confirm-password" style={{ display: 'block', marginBottom: '5px', color: '#ff69b4' }}>Confirm Password:</label>
            <input
              type={showPassword1 ? "text" : "password"}
              id="signup-confirm-password"
              name="confirmPassword"
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }}
            />
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#fff' }}>Or Signup using Google account:</p>
              <br />
              <FaGoogle className="social-icon" fill="white" onClick={signupUserUsingGoogle}></FaGoogle>
            </div>
          </>
        )}
        <button type="submit" onClick={() => isLogin ? signinUserUsingEmailandPassword(email, password) : signupUserUsingEmailandPassword(email, password)} style={{ width: '100%', padding: '10px', backgroundColor: '#ff69b4', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>{isLogin ? 'Login' : 'Sign Up'}</button>

      </form>
      <p style={{ textAlign: 'center', color: '#fff' }}>
        {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
        <button onClick={handleToggleMode} style={{ background: 'none', border: 'none', color: '#ff69b4', cursor: 'pointer', transition: 'color 0.3s ease' }}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default Authentication;