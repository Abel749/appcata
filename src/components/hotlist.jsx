import React from 'react';
import {Col, Row} from "antd";
import indexStyle from '../styles/index.module.css';

const HotList = () => (
    <div className={indexStyle.baseCard}>
        <Row >
            <Col span='24'>
                <h1>热力排行榜</h1>
            </Col>
        </Row>
        <Row>
            <div className={indexStyle.hotListImg}> </div>
        </Row>
    </div>
);

export default HotList;