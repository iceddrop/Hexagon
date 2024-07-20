import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
export default function Profile(){
    const { user } = useContext(AuthContext);
    return(
        <div>
        <h1>Dashboard</h1>
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt="Profile" />
          </div>
        )}
      </div>
    )
}