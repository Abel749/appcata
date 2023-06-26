import React from 'react';
import Image from "next/image";
import {Col, Row} from "antd";

const titleH1Style={
    color:'#036ED6',
    fontSize:'40px',
};


const titleH2Style={
    marginLeft:'350px',
    fontSize:'25px',
    marginTop:'35px',
    color: '#222222',
};

const titleH3Style={
    marginLeft:'350px',
    fontSize:'25px',
    marginTop:'10px',
    color: '#222222',
};

const row3Style={
    marginLeft:'270px',
    marginTop: '50px',

};

const ExtDataCoverage = () => (
    <div >
        <Row >
            <Col span='24'><h1 style={titleH1Style}>数据覆盖</h1></Col>
        </Row>
        <Row >
            <Row>
                <Col span='24'><h3 style={titleH2Style}>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终</h3></Col>
            </Row>
            <Row>
                <Col span='24'><h3 style={titleH3Style}>端）已经在使用外部数据</h3></Col>
            </Row>
        </Row>
        <Row style={row3Style}>
            <Image src="/extData/externalData_03.jpg" alt="" width={1150} height={400} priority/>
        </Row>
    </div>
);

export default ExtDataCoverage;
