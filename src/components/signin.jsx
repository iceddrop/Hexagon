import React, { useState } from "react";
import background from "../assets/Untitled.jpeg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {

  const [showNav, setShowNav] = useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    subscribe: false,
  });

  const [error,setError] = useState('');
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, errorMessage);
      });
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  return (
    <div className="signup" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay-2">
        <div className="signup-body">
          <h5 className="signup-title text-center">Sign in</h5>
          <form className="signup-form">
            <input
              type="text"
              placeholder="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className="form-control mt-2"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              className="form-control mt-3"
            />
            <div className="remember-div d-flex align-items-center mt-3">
              <input
                type="radio"
                id="subscribe"
                onChange={handleChange}
                name="subscribe"
                checked={formData.subscribe}
              />
              <label className="ms-2" htmlFor="remember">
                Remember me
              </label>
            </div>
            <p className="text-danger pt-2">{error}</p>
            <div className="signup-btn-div mt-2">
              <button onClick={onLogin} className="signup-btn">
                LOG IN
              </button>
            </div>
            <p className='text-center mt-2'>Don't have an account ? <Link to='/'>Signup here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}
