import React from 'react'
import {FaTwitter, FaFacebookF} from 'react-icons/fa'
export default function Footer(){
    return(
        <footer className=' bg-dark pt-4 pb-4 mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6'>     
                    <ul className='footer-list'>
                        <li>Privacy policy</li>
                        <li className='mt-2'>Terms of use</li>
                        <li className='mt-2'>DMCA</li>
                        <li className='mt-2'>&copy; 2022 devicedrop</li>
                    </ul>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='icon-div'>
                                <FaTwitter className='icon'/>
                                <FaFacebookF className='icon'/>
                            </div>
                        </div>
               </div> 
            </div> 
        </footer>    
    )
}