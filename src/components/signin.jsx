import React from "react";
import background from "../assets/Untitled.jpeg";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
/*onSuccess={(credentialResponse) => {
  var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
  console.log(credentialResponseDecoded);
}}
onError={() => {
  console.log("Login Failed");
}}*/

export default function Signin() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const responseGoogle = (response) => {
    // Send the Google token to your server
    axios.post('/api/auth/google', { token: response.tokenId })
      .then(res => {
        // Handle successful login, store user data in local storage or context
        localStorage.setItem('user', JSON.stringify(res.data));
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';
      })
      .catch(err => {
        console.error('Error logging in with Google', err);
      });
  };


  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

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
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
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
            <div className="remember-div d-flex mt-2">
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
            <div className="signup-btn-div mt-2">
              <button className="signup-btn">LOG IN</button>
            </div>
          </form>
          <div className="alternative mt-3">
            <p className="text-center alternative-text">
              <span>OR</span>
            </p>
            <div className="alternative-btn-div">
              <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <button className="signup-btn" onClick={() => login()}>
                Sign in with Google
              </button>

              <button className="signup-btn mt-3 bg-primary">
                LOG IN WITH FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
