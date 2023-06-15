
import React from 'react';
import Image from "next/image";
import {Col, Row} from "antd";

const titleH1Style={
    color:'#036ED6',
    fontSize:'40px',
};


const row3Style={
    marginLeft:'210px',
    marginTop: '50px',

};


const HotList = () => (

    <div >
        <Row >
            <Col span='24'><h1 style={titleH1Style}>热力排行榜</h1></Col>
        </Row>

        <Row style={row3Style}>
            <Image src="/hostlist.png" width={1200} height={460} priority/>
        </Row>
    </div>

);

export default HotList;