import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{marginBottom: '225px'}}>
      <div className=' d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1>Contact</h1>
        <hr className='w-25 mb-5 ' style={{border: '2px solid #007bff'}}/>

       
        <p>Adharsh Krishna A</p>
        <p><MdLocalPhone /> +91-9846689706</p>
        <p><MdEmail /> adharshkrishnaofficial@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact