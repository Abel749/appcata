import React from 'react';
import {Col, Row} from "antd";
import exTaDaStyle from "../styles/extada.module.css";

const ExtDataWhere = () => (
    <div className={exTaDaStyle.baseCard}>
        <h1 className={exTaDaStyle.titleH1}>数据服务场景</h1>
        <Row className={exTaDaStyle.row3}>
            <Col className={exTaDaStyle.col3Div1} >
                <div className={exTaDaStyle.col3Div2}>风险识别</div>
                <div className={exTaDaStyle.col3Div3}>
                    <img src="/extData/extfxsb.png" alt="" className={exTaDaStyle.img3} />
                </div>
            </Col>
            <Col className={exTaDaStyle.col3Div1} >
                <div className={exTaDaStyle.col3Div2}>普惠产品</div>
                <div className={exTaDaStyle.col3Div3}>
                    <img src="/extData/extphcp.png" alt="" className={exTaDaStyle.img3} />
                </div>
            </Col>
            <Col className={exTaDaStyle.col3Div1} >
                <div className={exTaDaStyle.col3Div2}>信用卡</div>
                <div className={exTaDaStyle.col3Div3}>
                    <img src="/extData/extxyk.png" alt="" className={exTaDaStyle.img3} />
                </div>
            </Col>
        </Row>
        <Row className={exTaDaStyle.row3}>
            <Col className={exTaDaStyle.col3Div1} >
                <div className={exTaDaStyle.col3Div2}>互联网贷款</div>
                <div className={exTaDaStyle.col3Div3}>
                    <img src="/extData/extwd.png" alt="" className={exTaDaStyle.img3} />
                </div>
            </Col>
            <Col className={exTaDaStyle.col3Div1} >
                <div className={exTaDaStyle.col3Div2}>金融市场</div>
                <div className={exTaDaStyle.col3Div3}>
                    <img src="/extData/extjrsc.png" alt="" className={exTaDaStyle.img3} />
                </div>
            </Col>
            <Col className={exTaDaStyle.col3Div1} >
                <div className={exTaDaStyle.col3Div2}>监管要求</div>
                <div className={exTaDaStyle.col3Div3}>
                    <img src="/extData/extsjjg.png" alt="" className={exTaDaStyle.img3} />
                </div>
            </Col>
        </Row>
    </div>
);

export default ExtDataWhere;
