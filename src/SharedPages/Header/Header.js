import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser,FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 py-3 px-lg-5 px-3 shadow mb-5">
          <Container fluid>
            <Navbar.Brand href="#" className='fw-semibold'><span className='bg-danger text-white p-2 fw-semibold rounded'>Dragon</span> News</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <Form className="d-flex ms-auto">
                  <button className='text-white bg-danger d-flex align-items-center px-3 rounded me-2 border-0'>
                    <FaPlus className='me-2' />
                    Advertise
                  </button>
                  <Button variant="outline-danger"><FaUser/></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;