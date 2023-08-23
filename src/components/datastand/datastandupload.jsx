import React from 'react';
import {Col, Row} from "antd";
import dataStandStyle from "../../styles/datastand.module.css";

const DataUpload = () => (
    <div className={dataStandStyle.baseCard}>
        <h1 className={dataStandStyle.titleH1}>新增/变更申请(待建设)</h1>
        <Row className={dataStandStyle.row3}>
            <Col className={dataStandStyle.col3Div1} >
                <div className={dataStandStyle.col3Div2}>新增/变更申请模板</div>
                <div className={dataStandStyle.col3Div2}>上传</div>
            </Col>
        </Row>
    </div>
);

export default DataUpload;
