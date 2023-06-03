import React from 'react';
import { Col, Row } from 'antd';
import AppCard from '../components/appcard';

const Content2 = () => {
  
  
  
  
  return (
  <> 
  <Row gutter={16}>
    <Col>
      <AppCard />
	</Col>
	<Col>
      <AppCard />
	</Col>
	<Col>
      <AppCard />
    </Col>
	<Col>
      <AppCard />
    </Col>
  </Row> 
  </>
  )
};


export default Content2;
