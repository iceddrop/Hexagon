import React from 'react'
import background from '../assets/Untitled.jpeg'

export default function Signin(){
    const [formData, setFormData] = React.useState({
        name: '',
        password: "",
        remember: false
      }
    )

    function handleChange(event){
        const{name, value, type, checked} = event.target
        setFormData(prevFormData =>{
          return{
            ...prevFormData,
            [name] : value
          }
        })
    }
    return(
        <div className='signup' style={{ backgroundImage: `url(${background})` }}>
             <div className='overlay-2'>
                  <div className='signup-body'>
                  <h5 className='signup-title text-center'>Sign in</h5>
                       <form className='signup-form'>
                            <input 
                            type="text"
                            placeholder='Name'
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            className='form-control mt-2'
                            />
                            <input
                            type="password"
                            placeholder='Password'
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                            className='form-control mt-3'
                            />
                            <div className='remember-div d-flex'>
                               <input
                               type='radio'
                                 id="subscribe"
                                 onChange={handleChange}
                                 name="subscribe"
                                 checked={formData.subscribe}
                               />
                               <label className='m-2' htmlFor='remember'>Remember me</label>
                            </div>
                            <div className='signup-btn-div mt-2'>
                            <button className='signup-btn'>LOG IN</button>
                            </div>    
                        </form>
                        <div className='alternative mt-3'>
                             <p className='text-center alternative-text'><span>OR</span></p>
                             <div className='alternative-btn-div'>
                                <button className='signup-btn bg-dark'>LOG IN WITH GOOGLE</button>
                                <button className='signup-btn mt-3 bg-primary'>LOG IN WITH FACEBOOK</button>
                             </div>   
                        </div>   
                  </div>
              </div>  
        </div>   
    )
}