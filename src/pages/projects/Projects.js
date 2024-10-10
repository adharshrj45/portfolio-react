import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import project1 from '../../assets/p1.png';
import project2 from '../../assets/P2.png';

const Projects = () => {
  return (
    <div>
      <Container className='d-flex flex-column align-items-center'>
        {/* Header Section */}
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
          <h1>My Projects</h1>
          <hr className='w-25 mb-5' style={{ border: '2px solid #007bff' }} />
        </div>

        {/* First Project */}
        <Row className='align-items-center justify-content-between mb-5 w-100'>
          <Col lg={6} md={12} className='text-center mb-5'>
            <img
              src={project2}
              style={{
                height: '250px',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '5px',
                objectFit: 'contain',
                border: '2px solid #007bff',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}
              alt="Minvayu Fablab UI Design"
            />
          </Col>
          <Col lg={6} md={12} className='d-flex flex-column align-items-center my-5'>
            <h2>Minvayu Fablab UI Design</h2>
            <p>
              MinVayu is a project founded by the Auroville Centre for Scientific Research 
              Trust that develops OPEN SOURCE technologies for urban and rural development 
              in multiple areas.
            </p>
            <div>
              <Link to="" target='_blank'>
                <Button variant='primary me-3 px-4 py-2'>View</Button>
              </Link>
              <Link to="" target='_blank'>
                <Button variant='outline-primary px-4 py-2'>Code</Button>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Second Project */}
        <Row className='align-items-center justify-content-between mb-5 w-100'>
          <Col lg={6} md={12} className='text-center my-5'>
            <img
              src={project1}
              style={{
                height: '250px',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '5px',
                objectFit: 'contain',
                border: '2px solid #007bff',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}
              alt="Todo App"
            />
          </Col>
          <Col lg={6} md={12} className='d-flex flex-column align-items-center my-5'>
            <h2>Todo App</h2>
            <p>
              Todo app is a simple todo list app built with React and Bootstrap.
            </p>
            <div>
              <Link to="https://adharshrj45.github.io/MyTodoApp/" target='_blank'>
                <Button variant='primary me-3 px-4 py-2'>View</Button>
              </Link>
              <Link to="https://github.com/adharshrj45/MyTodoApp.git" target='_blank'>
                <Button variant='outline-primary px-4 py-2'>Code</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
