import React from 'react'
import {Link} from 'react-router-dom'
import background from '../assets/Untitled.jpeg'

export default function Signup(){
    const [formData, setFormData] = React.useState({
        name: '',
        email: "",
        password: "",
        confirmPassword: "",
        subscribe: false
      }
    )

    const [success,setSuccess] = React.useState('')
    const [passwordMatch,setPasswordMatch] = React.useState('')
    const [submitMessage,setSubmitMessage] = React.useState('')
    function handleChange(event){
        const{name, value, type, checked} = event.target
        setFormData(prevFormData =>{
          return{
            ...prevFormData,
            [name] :  type === 'checkbox' ? checked : value
          }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const {password, confirmPassword, subscribe} = formData
        if(password === confirmPassword){
        return   setSuccess('Done! Proceed to log in') & setPasswordMatch('')
        }else{
          return setPasswordMatch("passwords do not match") & setSuccess('')
        }
    }

    return(
        <div className='signup' style={{ backgroundImage: `url(${background})`}}>
            <div className='overlay-2'>
             
                <div class='signup-body'>
                    <h5 className='signup-title text-center'>Create an account</h5>
                    <form className='signup-form' onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder='Name'
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    className='form-control mt-2'
                    />
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
                    <input
                    type="password"
                    placeholder='Confirm password'
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    className='form-control mt-3'
                    />
                    <div className='signup-btn-div mt-4'>
                    <button className='signup-btn'>SIGN UP</button>
                    <p className='text-center mt-3'>{success}</p>
                    <p className='text-center text-danger'>{passwordMatch}</p>
                    
                    </div>
                    <p className='text-center'>Already have an account ? <Link to='/signin'>Login here</Link></p>
                     </form>   
                 </div>   
             </div>   
         </div>   
    )
}