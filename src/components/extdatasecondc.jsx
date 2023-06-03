import { Row,Col,Button,Image,Space } from 'antd';
import React from 'react';

const ExtDataSecondC = () => (
  
  <Row>
    <Col span={8}>
      <Image  src="firstc.png" />
    </Col>
 
    <Col span={16}>
      <Space size="small" direction="vertical">
        <Row>
          <Space size="large">
            <Button type="primary">发票类</Button>
            <Button type="primary">证件类</Button>
            <Button type="primary">手机号码</Button>
          </Space>
        </Row>  
  
        <Row>
		  <Space size="large">
            <Button type="primary">地址位置</Button>
            <Button type="primary">单位信息</Button>
            <Button type="primary">银行卡要素</Button>
	      </Space>
        </Row> 
        <Row>
		  <Space size="large">
            <Button type="primary">人脸</Button>
            <Button type="primary">航旅</Button>
            <Button type="primary">个人偿债</Button>
		  </Space> 
        </Row> 
        <Row>
		  <Space size="large">
            <Button type="primary">信用征信</Button>
            <Button type="primary">个人画像</Button>
            <Button type="primary">企业画像</Button>
	      </Space> 
        </Row> 
        <Row>
	      <Space size="large">
            <Button type="primary">反欺诈黑名单</Button>
            <Button type="primary">征信黑名单</Button>
            <Button type="primary">黑名单数据</Button>
	      </Space> 
        </Row> 
        <Row>
	      <Space size="large">
            <Button type="primary">市场信息</Button>
            <Button type="primary">车辆信息</Button>
            <Button type="primary">房产价值评估</Button>
	      </Space> 
        </Row> 
        <Row>
	      <Space size="large">
            <Button type="primary">资讯类数据</Button>
            <Button type="primary">司法数据</Button>
            <Button type="primary">信用征信</Button>
	      </Space> 
        </Row> 
        <Row>
	      <Space size="large">
            <Button type="primary">监管处罚</Button>
            <Button type="primary">法规数据</Button>
            <Button type="primary">财汇数据</Button>
	      </Space> 
        </Row> 
        <Row>
	      <Space size="large">
            <Button type="primary">公积金</Button>
            <Button type="primary">反欺诈黑名单</Button>
            <Button type="primary">反欺诈黑名单</Button>
	      </Space> 
        </Row> 
      </Space>
    </Col>
  </Row> 
);

export default ExtDataSecondC;
