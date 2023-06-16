import React from 'react';
import Image from "next/image";
import {Col, Row} from "antd";
import Link from "next/link";
import styles from '../styles/content2.module.css';
const titleH1Style={
    color:'#036ED6',
    fontSize:'40px',
};

const titleH2Style={
    marginLeft:'230px',
    fontSize:'25px',
    color: '#222222',
};

const titleH3Style={
    marginLeft:'230px',
    fontSize:'25px',
    color: '#222222',
};


const row3Style={
    marginLeft:'150px',

};

const Content2 = () => (

    <div >
        <Row>
            <Col span='24'><h1 style={titleH1Style}>产品中心</h1></Col>
        </Row>
        <Row >
            <Row>
                <Col span='24'><h3 style={titleH2Style}>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终</h3></Col>
            </Row>
            <Row style={{marginTop:'-30px'}}>
                <Col span='24'><h3 style={titleH3Style}>端）已经在使用外部数据</h3></Col>
            </Row>
        </Row>
        <Row style={row3Style} gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }}>
            <Col>
                <div className={styles.container}>
                    <div className={styles.one}>
                        <div style={{marginTop:"330px"} }>
                            <h3 style={{fontSize:"24px"} }>外部数据</h3>
                        </div>
                    </div>
                        <div className={styles.two}>
                            <Link href="/extdata">
                                <div className={styles.link}>
                                    <h3 style={{fontSize:"24px"} }>外部数据</h3>
                                    <p className={styles.content}>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                     <button style={{width:"100px", height:"40px"}}>了解更多</button>
                                </div>
                            </Link>
                        </div>
                </div>
            </Col>
            <Col>
                <div className={styles.container2}>
                    <div className={styles.one2}>
                        <div style={{marginTop:"330px"} }>
                            <h3 style={{fontSize:"24px"} }>数据应用</h3>
                        </div>
                    </div>
                    <div className={styles.two2}>
                        <Link href="/errorpage">
                            <div className={styles.link}>
                                <h3 style={{fontSize:"24px"} }>数据应用</h3>
                                <p className={styles.content}>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                 <button style={{width:"100px", height:"40px"}}>了解更多</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Col>
            <Col>
                <div className={styles.container2}>
                    <div className={styles.one3}>
                        <div style={{marginTop:"330px"} }>
                            <h3 style={{fontSize:"24px"} }>数据治理</h3>
                        </div>
                    </div>
                        <div className={styles.two3}>
                            <Link href="/errorpage">
                                <div className={styles.link}>
                                    <h3 style={{fontSize:"24px"} }>数据治理</h3>
                                    <p className={styles.content}>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                    <button style={{width:"100px", height:"40px"}}>了解更多</button>
                                </div>
                            </Link>
                        </div>
                </div>
            </Col>
            <Col>
                <div className={styles.container2}>
                    <div className={styles.one4}>
                        <div style={{marginTop:"330px"} }>
                            <h3 style={{fontSize:"24px"} }>数据安全</h3>
                        </div>
                    </div>
                        <div className={styles.two4}>
                            <Link href="/errorpage">
                                <div className={styles.link}>
                                    <h3 style={{fontSize:"24px"} }>数据安全</h3>
                                    <p className={styles.content}>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                    <button style={{width:"100px", height:"40px"}}>了解更多</button>
                                </div>
                        </Link>
                        </div>
                </div>
            </Col>
        </Row>

    </div>
);

export default Content2;
