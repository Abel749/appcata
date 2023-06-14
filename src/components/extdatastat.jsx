import { Card,Row,Col } from 'antd';
import React from 'react';
import Image from "next/image";

const extDataCardStyle={
    //with
    padding:'20px',
    //textAlign:'center',
    marginLeft:'350px',
}

const divStyle={
    marginTop:'-48px',
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
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
    }}>
        <Col >
            <Row>
                <Col>
                    <div style={divPublicStyle}>
                        <Image src="/u466.svg"  width={60} height={60} priority/>
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
                        <Image src="/u466.svg"  width={60} height={60} priority/>
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
                        <Image src="/u466.svg"  width={60} height={60} priority/>
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
                        <Image src="/u466.svg"  width={60} height={60} priority/>
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
