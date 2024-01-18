import { useState } from "react";
import "../../public/css/Auth.css";
import Murious from "../../public/images/muriouslogo.webp";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const Authentication = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [isSignUpMode2, setSignUpMode2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

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

  return (
    <div className="sign-body">
      <div
        className={`sign-container ${isSignUpMode ? "sign-up-mode" : ""} ${
          isSignUpMode2 ? "sign-up-mode2" : ""
        }`}
      >
        <div className="signin-signup">
          <form
            action=""
            className={`sign-in-form ${isSignUpMode ? "hidden" : ""}`}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaEnvelope></FaEnvelope>
              </i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock></FaLock>
              </i>
              <input
                type={showPassword ? "text" : "password"}
                required
                id="passw"
                placeholder="Password"
              />
              <span className="show-btn" onClick={handleTogglePassword}>
                <i
                  className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <input type="submit" value="Login" className="btn" />
            <p className="social-text">Or Sign in with a social platform</p>
            <div className="social-media">
              <a href="" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle></FaGoogle>
                </i>
              </a>
            </div>
            <p className="account-text">
              Don't have an account?{" "}
              <a href="#" onClick={handleToggleSignUp2}>
                Sign up
              </a>
            </p>
          </form>

          <form
            action=""
            className={`sign-up-form ${isSignUpMode ? "" : "hidden"}`}
          >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i>
                <FaEnvelope></FaEnvelope>
              </i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock></FaLock>
              </i>
              <input
                type={showPassword1 ? "text" : "password"}
                required
                id="passw1"
                placeholder="Password"
              />
              <span className="show-btn" onClick={handleTogglePassword1}>
                <i
                  className={`fas ${showPassword1 ? "fa-eye" : "fa-eye-slash"}`}
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <input type="submit" value="Sign up" className="btn" />
            <p className="social-text">Or Sign up with a social platform</p>
            <div className="social-media">
              <a href="" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle></FaGoogle>
                </i>
              </a>
            </div>
            <p className="account-text">
              Already have an account?{" "}
              <a href="#" onClick={handleToggleSignUp}>
                Sign in
              </a>
            </p>
          </form>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <img src={Murious} alt="murious logo" className="image" />
            <div className="content">
              <h3>Member of Murious?</h3>
              <p>
                Already a member? Welcome back! Sign in and resume your
                tech-filled adventure with Murious.
              </p>
              <button
                className="btn"
                id="sign-in-btn"
                onClick={handleToggleSignUp}
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="panel right-panel">
            <img src={Murious} alt="murious logo" className="image" />
            <div className="content">
              <h3>New to Murious?</h3>
              <p>
                Hello and welcome to Murious, your one-stop tech event platform!
                We're thrilled to have you on board.
              </p>
              <button
                className="btn"
                id="sign-up-btn"
                onClick={handleToggleSignUp}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
