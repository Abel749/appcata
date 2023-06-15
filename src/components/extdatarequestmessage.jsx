import React from 'react';
import Image from "next/image";
import {Col, Row,Button, Form, Input, InputNumber} from "antd";

const titleH1Style={
    color:'#036ED6',
    fontSize:'40px',
};

const row3Style={
    marginLeft:'270px',
    marginTop: '50px',

};

const row4Style={
    marginLeft:'820px',
    marginTop: '10px',

};

const inputStyle={
    marginLeft:'10px',
    width:'460px',
    height:'70px',

};

const buttonStyle={
    marginTop:'-18px',
    marginLeft:'400px',
}

const ExtDataRequestMessage = () => (
    <div >
        <Row >
            <Col span='24'><h1 style={titleH1Style}>需求留言板</h1></Col>
        </Row>

        <Row style={row3Style}>
            <Image src="/extData/externalData_21.png" width={1100} height={400} priority/>
        </Row>
        <Row style={row4Style}>
            <Col><Image src="/extData/extData06.png" width={60} height={60} priority/></Col>
            <Col>
                <form>
                    <Form.Item >
                        <Input.TextArea placeholder="请输入留言" style={inputStyle}/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={buttonStyle}>
                        提交
                    </Button>
                </form>
            </Col>
        </Row>
    </div>
);

export default ExtDataRequestMessage;
