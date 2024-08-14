import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import background from '../assets/Untitled.jpeg';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase-config";


export default function Signup(){
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        subscribe: false
      }
    )

    const [success,setSuccess] = React.useState('')
    const [passwordQuality,setPasswordQuality] = React.useState('')
    const [error,setError] = React.useState('')
    const navigate = useNavigate();
    function handleChange(event){
        const{name, value, type, checked} = event.target
        setFormData(prevFormData =>{
          return{
            ...prevFormData,
            [name] :  type === 'checkbox' ? checked : value
          }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {password, email} = formData
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
           navigate("/signin")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
        })
    }

    return(
        <div className='signup' style={{ backgroundImage: `url(${background})`}}>
            <div className='overlay-2'>
                <div className='signup-body'>
                    <h5 className='signup-title text-center'>Create an account</h5>
                    <form className='signup-form' onSubmit={handleSubmit}>
                    <input 
                    type="email"
                    placeholder='Email address'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className='form-control mt-3'
                    />
                    <input
                    type="password"
                    placeholder='Password'
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    className='form-control mt-3'
                    />
                    <div className='signup-btn-div mt-4'>
                    <button onClick={handleSubmit} className='signup-btn'>SIGN UP</button>
                    <p className='text-center mt-3 text-danger'>{error}</p>
                    <p className='text-center text-danger'>{passwordQuality}</p>
                    
                    </div>
                    <p className='text-center'>Already have an account ? <Link to='/signin'>Login here</Link></p>
                     </form>   
                 </div>   
             </div>   
         </div>   
    )
}