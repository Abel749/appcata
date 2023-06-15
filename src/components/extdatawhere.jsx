import React from 'react';
import Image from "next/image";
import {Col, Row} from "antd";

const titleH1Style={
    color:'#036ED6',
    fontSize:'40px',
};

const titleH2Style={
    fontSize:'25px',
    marginTop:'35px',
    color: '#222222',
};

const row3Style={
    marginLeft:'270px',
    marginTop: '50px',

};

const ExtDataWhere = () => (
    <div >
        <Row >
            <Col span='24'><h1 style={titleH1Style}>用在哪</h1></Col>
        </Row>
        <Row style={row3Style} gutter={{
            xs: 16,
            sm: 32,
            md: 48,
            lg: 64,
        }}>
            <Col> <Image src="/extData/externalData_06.png" width={300} height={100} priority/></Col>
            <Col> <Image src="/extData/externalData_08.jpg" width={300} height={100} priority/></Col>
            <Col> <Image src="/extData/externalData_10.jpg" width={300} height={100} priority/></Col>
        </Row>
        <Row style={row3Style} gutter={{
            xs: 16,
            sm: 32,
            md: 48,
            lg: 64,
        }}>
            <Col> <Image src="/extData/externalData_14.jpg" width={300} height={100} priority/></Col>
            <Col> <Image src="/extData/externalData_16.jpg" width={300} height={100} priority/></Col>
            <Col> <Image src="/extData/externalData_17.jpg" width={300} height={100} priority/></Col>
        </Row>
    </div>
);

export default ExtDataWhere;
