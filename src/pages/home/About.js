import React from 'react'

const About = () => {
  return (
    <>
    <Container fluid className='d-flex flex-column align-items-center ' style={{backgroundColor:'', margin:'100px 0'}}>
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
          <h1><b>My Skills</b></h1>
          <hr className='w-25 mb-5' style={{ border: '2px solid #007bff' }} />
        </div>
        <Container className='d-flex justify-content-between align-items-center mb-5'>
          <Row>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button  className=' fs-4 fw-bold' variant="outline-dark" style={{width: '180px',height: '70px'}}> <FaReact style={{width: '30px',height: '30px',color: '#08ddff',marginRight: '10px'}}/>
          React</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <FaNodeJs style={{width: '30px',height: '30px',color: '#7db666',marginRight: '10px'}}/>
          Node </Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <SiMongodb style={{width: '30px',height: '30px',color: '#53a944',marginRight: '10px'}}/>Mongodb</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <SiExpress style={{width: '30px',height: '30px',color: '#000',marginRight: '10px'}}/>
          Express</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' ><FaCloud style={{width: '30px',height: '30px',color: '#ccc',marginRight: '10px'}}/>
          REST Api</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <TbBrandRedux style={{width: '30px',height: '30px',color: '#7a50be',marginRight: '10px'}}/>
          Redux</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <FaBootstrap style={{width: '30px',height: '30px',color: '#7818f7',marginRight: '10px'}}/>
          Bootstrap</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <FaGithub style={{width: '30px',height: '30px',color: '#000',marginRight: '10px'}}/>
          Github</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <FaGitAlt style={{width: '30px',height: '30px',color: '#f05539',marginRight: '10px'}}/>
          Git</Button>
          </Col><Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' > <FaJsSquare style={{width: '30px',height: '30px',color: '#f0dc4e',marginRight: '10px'}}/>
          Javascript</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' ><IoLogoCss3 style={{width: '30px',height: '30px',color: '#1c76b8',marginRight: '10px'}}/>CSS</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' ><FaHtml5 style={{width: '30px',height: '30px',color: '#e6532d',marginRight: '10px'}}/>
          HTML</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' ><RiTailwindCssFill style={{width: '30px',height: '30px',color: '#1dc0cd',marginRight: '10px'}}/>
          Tailwind</Button>
          </Col>
          <Col lg={2} md={3} xs={4} className='text-center mb-5'>
          <Button variant="outline-dark" style={{width: '180px',height: '70px'}} className=' fs-4 fw-bold' ><img src={figma} alt="figma" style={{width: '40px',height: '30px',color: '#e6532d',marginRight: '10px'}}/>
          Figma</Button>
          </Col>
        </Row>
        </Container>
      </Container>
    </>
  )
}

export default About
