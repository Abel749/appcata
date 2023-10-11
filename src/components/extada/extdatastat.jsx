import {Row,Col } from 'antd';
import React from 'react';
import exTaDaStyle from "../../styles/Extada.module.css";

const ExtDataStat = () => (
    <div className={exTaDaStyle.topItem}>
        <Row gutter={{xs: 32}}>
            <Col aria-colspan={8} className={exTaDaStyle.topItemRow}>
                <div className={exTaDaStyle.extData01}></div>
                <div className={exTaDaStyle.extDataLeft}>
                    <h1>64</h1>
                    <h3>供应商</h3>
                </div>
                <div className={exTaDaStyle.extDataRight}>家</div>
            </Col>

            <Col aria-colspan={8} className={exTaDaStyle.topItemRow}>
                <div className={exTaDaStyle.extData02}></div>
                <div className={exTaDaStyle.extDataLeft}>
                    <h1>109</h1>
                    <h3>数据项</h3>
                </div>
                <div className={exTaDaStyle.extDataRight}>个</div>
            </Col>

            <Col aria-colspan={8} className={exTaDaStyle.topItemRow}>
                <div className={exTaDaStyle.extData03}></div>
                <div className={exTaDaStyle.extDataLeft}>
                    <h1>614</h1>
                    <h3>数据产品支持</h3>
                </div>
                <div className={exTaDaStyle.extDataRight}>个</div>
            </Col>

            <Col aria-colspan={8} className={exTaDaStyle.topItemRow}>
                <div className={exTaDaStyle.extData04}></div>
                <div className={exTaDaStyle.extDataLeft}>
                    <h1>0</h1>
                    <h3>本日上新</h3>
                </div>
                <div className={exTaDaStyle.extDataRight}>个</div>
            </Col>
        </Row>
    </div>
);

export default ExtDataStat;
