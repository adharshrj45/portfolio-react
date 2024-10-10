import React from 'react'
import './Home.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//icons---------------------------------------
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import image from '../../assets/1.jpg';
import Skils from './Skils';



const Home = () => {
  return (
    <Container>
    <Container style={{margin: '70px 0'}}>
      <Row  className='d-flex justify-content-center align-items-center'>
      <Col lg={6} md={6} xs={12} className='d-flex justify-content-center align-items-center' >
        <img src={image} alt=""  style={{width: '400px', height: '400px', borderRadius: '50%'}}/>
      </Col>
      <Col lg={6} md={6} xs={12} className='d-flex justify-content-center align-items-center flex-column '>
      <Row>
      <Col lg={12} md={12} xs={12} ><Row><Col lg={12} md={12} xs={12} className="text-lg-start text-md-start text-center"><h1 >Hi, I am</h1></Col><Col lg={12} md={12} xs={12} className="text-lg-start text-md-start text-center"><h1><b style={{color: '#007bff'}}>Adharsh Krishna</b></h1></Col></Row></Col>
      <Col  lg={12} md={12} xs={12} style={{textAlign: 'justify'}}><p>I am a Mern Stack Developer.
          I am Passionate about UI design and Developing Responsive Interfaces.
        </p>
      </Col>

      <Col  lg={12} md={12} xs={12} style={{justifyContent: 'center', display: 'flex'}}>
        <div className='icons'>
        <Link to="https://www.linkedin.com/in/adharsh-krishna/" target='_blank'>
        <Button variant='outline-dark' style={{ borderRadius: '50%' , border: '2px solid black'}}><FaLinkedinIn className='icon'/></Button>
        </Link>
        <Link to="https://github.com/adharshrj45" target='_blank'>
        <Button variant='outline-dark' style={{ borderRadius: '50%' , border: '2px solid black'}}><IoLogoGithub className='icon'/></Button>
        </Link>
        <Link to="https://wa.me/+919846689706" target='_blank'>
        <Button variant='outline-dark' style={{ borderRadius: '50%' , border: '2px solid black'}}><IoLogoWhatsapp className='icon'/></Button>
        </Link>
        </div>
      </Col>
        </Row>
      </Col>
      </Row>
    </Container>
    <Skils/>
    </Container>
  )
}

export default Home