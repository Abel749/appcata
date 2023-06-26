import { Card,Row,Col } from 'antd';
import React from 'react';
import Image from "next/image";

const extDataCardStyle={
    padding:'20px',
    marginLeft:'100px',
}

const divStyle={
    width:'1200px',
    marginTop:'-48px',
    marginLeft: '270px',
};

const h1Style={
    fontSize:'40px',
    color:'#036ED6',
};

const divPublicStyle={
    paddingTop:'20px',

};


const ExtDataStat = () => (
  <Card title="" bordered={true} bodyStyle={extDataCardStyle} style={divStyle}>
    <Row gutter={{
        xs: 32,
        sm: 64,
        md: 96,
        lg: 128,
    }}>
        <Col >
            <Row>
                <Col>
                    <div style={divPublicStyle}>
                        <Image src="/extData/extData01.svg" alt="" width={60} height={60} priority/>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1 style={h1Style}>64</h1>
                        <h>供应商</h>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h>家</h>
                    </div>
                </Col>
            </Row>
        </Col>

        <Col >
            <Row>
                <Col>
                    <div style={divPublicStyle}>
                        <Image src="/extData/extData02.svg" alt=""  width={60} height={60} priority/>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h1 style={h1Style}>109</h1>
                        <h>数据项</h>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h>个</h>
                    </div>
                </Col>
            </Row>
        </Col>


        <Col >
            <Row>
                <Col>
                    <div style={divPublicStyle}>
                        <Image src="/extData/extData03.svg" alt="" width={60} height={60} priority/>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h1 style={h1Style}>614</h1>
                        <h>数据产品支撑</h>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h>个</h>
                    </div>
                </Col>
            </Row>
        </Col>



        <Col >
            <Row>
                <Col>
                    <div style={divPublicStyle}>
                        <Image src="/extData/extData04.svg" alt="" width={60} height={60} priority/>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h1 style={h1Style}>0</h1>
                        <h>本日上新</h>
                    </div>
                </Col>
                <Col >
                    <div>
                        <h>个</h>
                    </div>
                </Col>
            </Row>
        </Col>




    </Row>

  </Card>
);

export default ExtDataStat;
