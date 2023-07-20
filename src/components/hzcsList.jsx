import React from 'react';
import {Col, Row} from "antd";
import indexStyle from '../styles/index.module.css';

const HzCsList = () => (
    <div className={indexStyle.hotList}>
        <Row >
            <Col span='24'><h1>合作厂商</h1></Col>
        </Row>
        <Row>
            <div className={indexStyle.HzCsListImg}> </div>
        </Row>
    </div>
);

export default HzCsList;