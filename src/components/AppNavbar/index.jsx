import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AppNavbar = ({ handleSearch }) => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <div>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Col>
            {/* <Col xs="auto">
              <Button
                type="submit"
              >Search</Button>
            </Col> */}
          </Row>
        </div>
      </Container>
    </Navbar>
  )
};

export default AppNavbar;