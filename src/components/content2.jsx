import React from 'react';
import Image from "next/image";
import {Col, Row} from "antd";
import Link from "next/link";

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
            <Col> <Image src="/u112_state0.png" width={270} height={500} priority/>
                <button>
                    <Link href="/extdata">了解更多</Link>
                </button>
            </Col>
            <Col> <Image src="/u119_state0.png" width={270} height={500} priority/>
                <button>
                    <Link href="/errorpage">了解更多</Link>
                </button>
            </Col>
            <Col> <Image src="/u126_state0.png" width={270} height={500} priority/>
                <button>
                    <Link href="/errorpage">了解更多</Link>
                </button>
            </Col>
            <Col> <Image src="/u133_state0.png" width={270} height={500} priority/>
                <button>
                    <Link href="/errorpage">了解更多</Link>
                </button>
            </Col>
        </Row>

    </div>
);

export default Content2;
