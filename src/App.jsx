import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import ShowOverview from "./components/showOverview";
import Signin from "./components/signin";
import ShowCategories from "./components/showCategories";
import Error from "./components/errorpage";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId = "692557906302-rfvk3109g1gvh5f42ht123tmkknk5o0h.apps.googleusercontent.com";
  return (
    <div className="overall">
      <GoogleOAuthProvider clientId={clientId}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="movieOverview/:id" element={<ShowOverview />} />
            <Route path="/showCategories" element={<ShowCategories />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
