import React from 'react'
import { Button } from 'react-bootstrap';
import { TbSquareLetterA } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className='d-flex align-items-center ' style={{backgroundColor:'#007bff',color: 'white',justifyContent: 'space-between',padding: '10px 20px', marginTop: '100px',bottom: '0',left: '0',right: '0'}}>
            
                
                
                    <div>
                    <Link to='/' >
                     <TbSquareLetterA style={{ width: '50px', height: '50px', color: 'white' }} />
                    </Link>
                    </div>
                    
                
                    <div className='icons'>
                        <Link to="https://www.linkedin.com/in/adharsh-krishna/" target='_blank'>
                        <Button variant='outline-dark border-0'><FaLinkedinIn className='text-white' style={{width:'20px',height:"20px"}} /></Button>
                        </Link>
                        <Link to="https://github.com/adharshrj45" target='_blank'>
                        <Button variant='outline-dark border-0'><IoLogoGithub className=' text-white' style={{width:'20px',height:"20px"}}/></Button>
                        </Link>
                        <Link to="https://wa.me/+919846689706" target='_blank'>
                        <Button variant='outline-dark border-0'><IoLogoWhatsapp className=' text-white' style={{width:'20px',height:"20px"}}/></Button>
                        </Link>
                    </div>

            
        </footer>
    </>
  )
}

export default Footer