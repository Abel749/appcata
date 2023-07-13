import React from 'react';
import {Col, Row} from "antd";
import exTaDaStyle from "../styles/extada.module.css";

const ExtDataWhere = () => (
    <div className={exTaDaStyle.content3}>
        <h1 className={exTaDaStyle.titleH1}>用在哪</h1>
        <Row className={exTaDaStyle.row3}>
            <Col className={exTaDaStyle.col3}>
                <img src="/extData/externalData_06.png" alt="" className={exTaDaStyle.img3} />
            </Col>
            <Col className={exTaDaStyle.col3}>
                <img src="/extData/externalData_08.jpg" alt="" className={exTaDaStyle.img3} />
            </Col>
            <Col className={exTaDaStyle.col3}>
                <img src="/extData/externalData_10.jpg" alt="" className={exTaDaStyle.img3}/>
            </Col>
        </Row>
        <Row className={exTaDaStyle.row3}>
            <Col className={exTaDaStyle.col3}>
                <img src="/extData/externalData_14.jpg" alt="" className={exTaDaStyle.img3}/>
            </Col>
            <Col className={exTaDaStyle.col3}>
                <img src="/extData/externalData_16.jpg" alt="" className={exTaDaStyle.img3} />
            </Col>
            <Col className={exTaDaStyle.col3}>
                <img src="/extData/externalData_17.jpg" alt="" className={exTaDaStyle.img3} />
            </Col>
        </Row>
    </div>
);

export default ExtDataWhere;
