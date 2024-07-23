import React from "react";
import background from "../assets/Untitled.jpeg";
import { GoogleLogin } from "@react-oauth/google";
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
    const handleLoginSuccess = (response) => {
      console.log("Google login response", response);

      axios.post("http://localhost/Tomiwa/php/Hexagon-backend/index.php", {
          token: response.credential,
        })
        .then((res) => {
          console.log("Server response", res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.href = "../pages/profile.jsx";
        })
        .catch((err) => {
          console.error("Error logging in with Google", err);
        });
    };

    const handleLoginFailure = (error) => {
      console.error("Google login failed", error);
    };
  return (
    <div className="signup" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay-2">
        <div className="signup-body">
          
          <div className="alternative mt-3">
            <p className="text-center alternative-text">
              <span>OR</span>
            </p>
            <div className="alternative-btn-div">
            <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
