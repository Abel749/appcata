import {Row,Col } from 'antd';
import React from 'react';
import dataStandStyle from "../../styles/datastand.module.css";

const DataStandStat = () => (
    <div className={dataStandStyle.topItem}>
        <Row gutter={{xs: 32}}>
            <Col aria-colspan={8} className={dataStandStyle.topItemRow}>
                <div className={dataStandStyle.extData01}></div>
                <div className={dataStandStyle.extDataLeft}>
                    <h1>1245</h1>
                    <h3>数据总量</h3>
                </div>
                <div className={dataStandStyle.extDataRight}>个</div>
            </Col>

            <Col aria-colspan={8} className={dataStandStyle.topItemRow}>
                <div className={dataStandStyle.extData02}></div>
                <div className={dataStandStyle.extDataLeft}>
                    <h1>8</h1>
                    <h3>主题域</h3>
                </div>
                <div className={dataStandStyle.extDataRight}>项</div>
            </Col>

            <Col aria-colspan={8} className={dataStandStyle.topItemRow}>
                <div className={dataStandStyle.extData03}></div>
                <div className={dataStandStyle.extDataLeft}>
                    <h1>22</h1>
                    <h3>数据归属部门</h3>
                </div>
                <div className={dataStandStyle.extDataRight}>个</div>
            </Col>

            <Col aria-colspan={8} className={dataStandStyle.topItemRow}>
                <div className={dataStandStyle.extData04}></div>
                <div className={dataStandStyle.extDataLeft}>
                    <h1>0</h1>
                    <h3>本月上新</h3>
                </div>
                <div className={dataStandStyle.extDataRight}>个</div>
            </Col>
        </Row>
    </div>
);

export default DataStandStat;
