import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
import profile from "../assets/adhar-1.jpg"


const About = () => {
  return (
    <>
    <div>
      <Container className='d-flex flex-column align-items-center'>
        {/* Header Section */}
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
          <h1>About Me</h1>
          <hr className='w-25 ' style={{ border: '2px solid #007bff' }} />
        </div>

       

        <Row className='align-items-center justify-content-between mb-5 w-100'>
          <Col lg={6} md={12} className='text-center my-5'>
            <img
              src={profile}
              style={{
                height: '500px',
                width: '100%',
                maxWidth: '400px',
               
                objectFit: 'contain',
               
              }}
              alt="Todo App"
            />
          </Col>
          <Col lg={6} md={12} className='d-flex flex-column align-items-center my-5'>
            <p>I am passionate about web development and UI design. My academic background includes a Master’s degree in Computer Science
               from Pondicherry University (2022-2024) which has equipped me with a solid foundation in software development.
            I have developed dynamic web applications  and  front-end prototypes
             , leveraging tools like MERN Stack, Figma and GitHub for seamless design integration.
             I have also gained valuable hands-on experience in setting up and calibrating advanced technologies, such as 3D printers, as part of a collaborative team project.</p>
           
          </Col>
        </Row>

      </Container>
    </div>
    </>
  )
}

export default About
