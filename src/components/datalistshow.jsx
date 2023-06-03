import { Carousel,Card,Row,Col,Button } from 'antd';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import React from 'react';

const titleStyle = {
  height: '60px',
  color: '#fff',
  lineHeight: '40px',
  textAlign: 'center',
  background: '#364d79',
};

const rowStyle = {
  margin: 0,
  height: '450px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const cardStyle = {
  margin:0,
  height: '300px',
  color: '#fff',
  lineHeight: '40px',
  textAlign: 'center',
  background: '#364d79',
};

const DataListShow = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  
  return (
       
    <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} afterChange={onChange}>
      <div>
	    <Row gutter = '5' style={titleStyle}>
		  <Col span= '24'><h1>资产推荐</h1></Col>
		</Row>
	    <Row gutter = '5' style={rowStyle}>
	      <Col span= '8'>
	        <Card cover={<img alt="公共数据" src="public_data.png" />} bordered={false} style={cardStyle}>
              <h2>公共数据</h2>
              <h4>工商、司法、行政、信用等公共开放数据</h4>
              <p><Button type="primary" size="large" >查看更多</Button></p>
            </Card>
		  </Col>
		  <Col span= '8'>
	        <Card cover={<img alt="行业数据" src="industry_data.png" />} bordered={false} style={cardStyle}>
              <h2>行业数据</h2>
              <h4>金融、电信、制造、能源、医药、交通、交易、房地产等细分行业数据</h4>
              <p><Button type="primary" size="large" >查看更多</Button></p>
            </Card>
		  </Col>
		  <Col span= '8'>
	        <Card cover={<img alt="社会数据" src="social_data.png" />} bordered={false} style={cardStyle}>
              <h2>社会数据</h2>
              <h4>互联网平台、新闻媒体、数字艺术、影像音乐等社会价值数据</h4>
              <p><Button type="primary" size="large" >查看更多</Button></p>
            </Card>
		  </Col>
        </Row>
	  </div>
      
      <div>
        <h3 style={rowStyle}>2</h3>
      </div>
      <div>
        <h3 style={rowStyle}>3</h3>
      </div>
      <div>
        <h3 style={rowStyle}>4</h3>
      </div>
    </Carousel>
	
  );
};
export default DataListShow;