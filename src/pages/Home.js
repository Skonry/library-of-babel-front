import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import LoginForm from '../components/users/LoginForm';
import RegistrationForm from '../components/users/RegistrationForm';

function Home() {
  return (
    <>
      <Row>
        <Col span={24} >
          <Typography.Title style={{padding: '80px', textAlign: 'center'}}>MyLibrary</Typography.Title>
        </Col>
      </Row>
      <Row gutter={32}>
        <Col span={11} style={{padding: '0 120px'}}>
          <LoginForm />
        </Col>
        <Col span={2}>
          <Divider type="vertical" />
        </Col>
        
        <Col span={11} style={{padding: '0 120px'}}>
          <RegistrationForm />
        </Col>
      </Row>
    </>
  );
}

export default Home;