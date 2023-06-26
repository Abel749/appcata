import { Carousel,Card,Row,Col,Button } from 'antd';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import React from 'react';
import Image from "next/image";

const titleStyle = {
	height: '60px',
	color: '#fff',
	lineHeight: '40px',
	textAlign: 'center',
	background: '#036ED6',

};

const rowStyle = {
	margin: 0,
	height: '450px',
	color: '#fff',
	lineHeight: '400px',
	textAlign: 'center',
	backgroundColor: '#036ED6',
	marginTop: '50px',
};

const cardStyle = {
	margin: 0,
	height: '300px',
	color: '#fff',
	lineHeight: '40px',
	textAlign: 'center',
	background: '#036ED6',
};

const carouselStyle={
	width:'1000px',
	marginLeft:'300px',
};

const titleH1Style={
	fontSize:'40px',
	marginTop:'30px',
}

const DataListShow = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (

    <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} afterChange={onChange} style={carouselStyle} >
      <div>
	    <Row gutter = '5' style={titleStyle}>
		  <Col span= '24'><h1 style={titleH1Style}>资产推荐</h1></Col>
		</Row>
	    <Row gutter = '5' style={rowStyle}>
	      <Col span= '8'>
	        <Card cover={<Image alt="公共数据"  width={600} height={400} src="/public_data.png" />} bordered={false} style={cardStyle}>
              <h2>公共数据</h2>
              <h4>工商、司法、行政、信用等公共开放数据</h4>
              <p><Button type="primary" size="large" >查看更多</Button></p>
            </Card>
		  </Col>
		  <Col span= '8'>
	        <Card cover={<Image alt="行业数据"  width={600} height={400} src="/industry_data.png" />} bordered={false} style={cardStyle}>
              <h2>行业数据</h2>
              <h4>金融、电信、制造、能源、医药、交通、交易、房地产等细分行业数据</h4>
              <p><Button type="primary" size="large" >查看更多</Button></p>
            </Card>
		  </Col>
		  <Col span= '8'>
	        <Card cover={<Image alt="社会数据"  width={600} height={400} src="/social_data.png" />} bordered={false} style={cardStyle}>
              <h2>社会数据</h2>
              <h4>互联网平台、新闻媒体、数字艺术、影像音乐等社会价值数据</h4>
              <p><Button type="primary" size="large" >查看更多</Button></p>
            </Card>
		  </Col>
        </Row>
	  </div>

	<div>
		<Row gutter = '5' style={titleStyle}>
			<Col span= '24'><h1 style={titleH1Style}>资产推荐</h1></Col>
		</Row>
		<Row gutter = '5' style={rowStyle}>
			<Col span= '8'>
				<Card cover={<Image alt="公共数据" width={600} height={400} src="/public_data.png" />} bordered={false} style={cardStyle}>
					<h2>公共数据</h2>
					<h4>工商、司法、行政、信用等公共开放数据</h4>
					<p><Button type="primary" size="large" >查看更多</Button></p>
				</Card>
			</Col>
			<Col span= '8'>
				<Card cover={<Image alt="行业数据" width={600} height={400} src="/industry_data.png" />} bordered={false} style={cardStyle}>
					<h2>行业数据</h2>
					<h4>金融、电信、制造、能源、医药、交通、交易、房地产等细分行业数据</h4>
					<p><Button type="primary" size="large" >查看更多</Button></p>
				</Card>
			</Col>
			<Col span= '8'>
				<Card cover={<Image alt="社会数据" width={600} height={400} src="/social_data.png" />} bordered={false} style={cardStyle}>
					<h2>社会数据</h2>
					<h4>互联网平台、新闻媒体、数字艺术、影像音乐等社会价值数据</h4>
					<p><Button type="primary" size="large" >查看更多</Button></p>
				</Card>
			</Col>
		</Row>
	</div>


    </Carousel>

  );
};
export default DataListShow;