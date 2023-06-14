import {Card, Col, Row} from 'antd';
import React from 'react';
import Image from "next/image";

const thisMonthStatCardStyle={
    //padding:'20px',
    //textAlign:'center',
    //marginLeft:'50px',
    height:'160px',
}

const divStyle={
    width:'1200px',
    marginTop:'-48px',
    marginLeft: '170px',
};

const div2Style={
    marginTop: '17px',
};

const publicRowStyle={
    marginTop: '12px',
};

const montCardP1Style={
    fontSize:'10px',
    color:'#939393',
};

const montCardP2Style={
    fontSize:'26px',
    fontWeight:'600',
    color:'#222222',
};

const ThisMonthStat = () => {
    return (
    <Card bodyStyle={thisMonthStatCardStyle} style={divStyle}>
            <Row>
                <p>本月统计 </p>
            </Row>
            <hr/>
            <Row gutter={{
                xs: 32,//8
                sm: 64,// 16
                md: 96,//24
                lg: 128,//32
            }}>
                <Col>
                    <Row style={publicRowStyle}>
                        <Col>
                            <Image src="/count.svg"  width={90} height={90}  priority  />
                        </Col>
                        <Col>
                            <div style={div2Style}>
                                <p style={montCardP1Style}>资产总数（个）</p>
                                <p style={montCardP2Style}>124,345</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <Row style={publicRowStyle}>
                        <Col >
                            <Image src="/resource.svg"  width={90} height={90}  priority  />
                        </Col>
                        <Col >
                            <div style={div2Style}>
                                <p style={montCardP1Style}>已使用资源（个）</p>
                                <p style={montCardP2Style}>54,322</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <Row style={publicRowStyle}>
                        <Col>
                            <Image src="/residue.svg"  width={90} height={90}  priority  />
                        </Col>
                        <Col >
                            <div style={div2Style}>
                                <p style={montCardP1Style}>剩余（个）</p>
                                <p style={montCardP2Style}>68,123</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <Row style={publicRowStyle}>
                        <Col >
                            <Image src="/inventory.svg"  width={90} height={90}  priority  />
                        </Col>
                        <Col >
                            <div style={div2Style}>
                                <p style={montCardP1Style}>库存（个）</p>
                                <p style={montCardP2Style}>68,123</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </Card>
)
};





export default ThisMonthStat;