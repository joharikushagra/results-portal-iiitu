import React from 'react';
import {Row, Col, Button} from 'antd';
import './home-page.css';
import image from '../../../images/5269.jpg';
import logo from '../../../images/downloaded2.png';
import {Typography} from 'antd';

function HomePage() {
  const {Title} = Typography;
  return (
    <div>
      <Row className="row">
        <Col className="first" xs={24} sm={24} md={10} lg={8} xl={8}>
          <img id="logo" src={logo} alt="IIIT UNA" />
        </Col>
        <Col className="second" xs={24} sm={24} md={14} lg={16} xl={16}>
          <img src={image} className="image" alt="Background" />
          <Title className="text" style={{color: 'white'}} level={2}>
            Welcome to IIITU Result Portal
          </Title>
          <div className="overlay"></div>
          <Button className="button" size="large" type="primary" href="/login">
            Know Your Result
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
