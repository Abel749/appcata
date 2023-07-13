import {Col, Row} from 'antd';
import React from 'react';
import Image from "next/image";
import indexStyle from "../styles/index.module.css";

const ThisMonthStat = () => {
    return (
    <div className={indexStyle.baseDiv}>
            <Row>
                <h3 className={indexStyle.totalTitle}>本月统计 </h3>
            </Row>
            <hr/>
            <Row>
                <Col  className={indexStyle.publicRowStyle}>
                    <Row>
                        <Col>
                            <Image src="/count.svg" alt=""  width={90} height={90}  priority  />
                        </Col>
                        <Col>
                            <div className={indexStyle.div2Style}>
                                <p className={indexStyle.montCardP1Style}>资产总数（个）</p>
                                <p className={indexStyle.montCardP2Style}>124,345</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col  className={indexStyle.publicRowStyle}>
                    <Row>
                        <Col >
                            <Image src="/resource.svg" alt=""  width={90} height={90}  priority  />
                        </Col>
                        <Col >
                            <div className={indexStyle.div2Style}>
                                <p className={indexStyle.montCardP1Style}>已使用资源（个）</p>
                                <p className={indexStyle.montCardP2Style}>54,322</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col  className={indexStyle.publicRowStyle}>
                    <Row>
                        <Col>
                            <Image src="/residue.svg" alt=""  width={90} height={90}  priority  />
                        </Col>
                        <Col >
                            <div className={indexStyle.div2Style}>
                                <p className={indexStyle.montCardP1Style}>剩余（个）</p>
                                <p className={indexStyle.montCardP2Style}>68,123</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col  className={indexStyle.publicRowStyle}>
                    <Row>
                        <Col >
                            <Image src="/inventory.svg" alt=""  width={90} height={90}  priority  />
                        </Col>
                        <Col >
                            <div className={indexStyle.div2Style}>
                                <p className={indexStyle.montCardP1Style}>库存（个）</p>
                                <p className={indexStyle.montCardP2Style}>68,123</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </div>
)
};





export default ThisMonthStat;