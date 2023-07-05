import React from 'react';
import Link from 'next/link';
import { Menu, Col, Row } from 'antd';
import AvatarLogin from '../components/avatarlogin';
import Image from "next/image";

const items = [
	{
		label: ( <Link href = "/" > 首页 < /Link>),
		key: 'home',
	},
	{
		label: ( <Link href = "/datacenter" > 资产中心 < /Link>),
		key: 'datacenter',
	},
	{
		label: ( <Link href = "/newslist" > 新闻咨讯 < /Link>),
		key: 'newsList',
	},
]

const menuStyle={
    backgroundColor: '#036ED6',
    color:'white',
	textDecoration:'none',
}

const TopContent = (props) => {
	return(
	  <>
		<Row >
		  <Col span={8}>
			  <Image src="/u110.png" alt="" width={100} height={60}  priority  />
		  </Col>
		  <Col span={8}>
			<Menu style={menuStyle}
			  mode="horizontal"
			  defaultSelectedKeys={props.frompage}
			  items = {items}
			/>
		  </Col>
		  <Col span={4} ></Col>
		  <Col span={4} ><AvatarLogin propName={props.propName} /></Col>
		</Row>
	  </>
	  );
}



export default TopContent;