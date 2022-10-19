import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from '../SharedPages/leftSide/LeftSide';
import RightSideMain from '../SharedPages/RightSide/RightSideMain/RightSideMain';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPages/Header/Header';
import Footer from '../SharedPages/Footer/Footer';

const Main = () => {
  return (
    <div className='bg-light' >
      <Header></Header>
      <div className='px-5 mx-2'>
       <Row className="justify-content-md-center">
        <Col xs lg="2">
          <LeftSide></LeftSide>
        </Col>
        <Col lg="7">
            <Outlet></Outlet>
        </Col>
        <Col xs lg="3">
        <RightSideMain></RightSideMain>
        </Col>
      </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;