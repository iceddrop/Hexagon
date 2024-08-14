
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Profile() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, handle redirect or UI update
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <div className="px-30">
      <button className="btn" onClick={handleLogout}>logOut</button>
    </div>
  );
}
