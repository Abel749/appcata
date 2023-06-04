import {Card, Col, Row} from 'antd';
import React from 'react';
import Image from "next/image";
import * as url from "url";
import styles from '../styles/thismonthstat.module.css';

const ThisMonthStat = () => {
    return (
    <Card>
        <div>
            <Image src="/u37.png" width={1300} height={600} priority  className={styles.content1}/>
         <div >
            <Row>
                <Col><h3>本月统计 </h3></Col>
            </Row>
            <hr/>
            <Row >
                <Col span={2}>
                    <Image src="/u145.svg" width={60} height={60}  priority  />
                </Col>
                <Col span={4}>
                    <p>资产总数</p>
                    <p>124,345</p>
                </Col>
                <Col span={2}>
                    <Image src="/u147.svg" width={60} height={60}  priority  />
                </Col>
                <Col span={4}>
                    <p>已使用资源</p>
                    <p>54,322</p>
                </Col>
                <Col span={2}>
                    <Image src="/u149.svg" width={60} height={60}  priority  />
                </Col>
                <Col span={4}>
                    <p>剩余（个）</p>
                    <p>68,123</p>
                </Col>
                <Col span={2}>
                    <Image src="/u151.svg" width={60} height={60}  priority  />
                </Col>
                <Col span={4}>
                    <p>库存（个）</p>
                    <p>68,123</p>
                </Col>
            </Row>
        </div>
        </div>
    </Card>

)
};





export default ThisMonthStat;