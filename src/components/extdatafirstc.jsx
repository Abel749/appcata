import React from 'react';
import { Space,Row,Col,Button,Image } from 'antd';
import { AuditOutlined,ContainerOutlined,CommentOutlined,PayCircleOutlined,BarChartOutlined,FundOutlined,BankOutlined} from '@ant-design/icons';


const ExtDataFirstC = () => (
  
    <Row>	
	  <Col span={8}>
	    <Image src="firstc.png" />
	  </Col>
	  
	  <Col span={16}>
	    <Space size="large" direction="vertical">
          <Row>
		    <Space size="large">
              <Button type="primary" block icon={<AuditOutlined />}>检核类数据</Button>
              <Button type="primary" block icon={<ContainerOutlined />}>评分类数据</Button>
		    </Space>
	      </Row>  
	      <Row>
		    <Space size="large">
              <Button type="primary" block icon={<AuditOutlined />}>标签类数据</Button>
              <Button type="primary" block icon={<AuditOutlined />}>黑名单类数据</Button>
		    </Space>
	      </Row>  
	      <Row>
		    <Space size="large">
              <Button type="primary" size="large" icon={<CommentOutlined />}>咨询服务类</Button>
              <Button type="primary" size="large" icon={<PayCircleOutlined />}>价格评估类</Button>
		    </Space>	
	      </Row>  
	      <Row>
		    <Space size="large">
              <Button type="primary" size="large" icon={<BarChartOutlined />}>投资分析数据</Button>
              <Button type="primary" size="large" icon={<FundOutlined />}>监管合规数据</Button>
			</Space>  
	      </Row>  
	      <Row>
		    <Space size="large">
              <Button type="primary" size="large" icon={<BankOutlined />}>政务数据</Button>
              <Button type="primary" size="large" icon={<AuditOutlined />}>检核类数据</Button>
			</Space>  
	      </Row> 
        </Space>
	  </Col>
	 
    </Row>   
  
);

export default ExtDataFirstC;
