import React from 'react';
import Link from 'next/link';
import { Menu, Col, Row } from 'antd';
import SearchButton from '../components/searchbutton';
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
]

const TopContent = (props) => (
	<>
		<Row >
			<Col span = { 8 } >
				<Image src = "/u110.png" alt = "" width = { 60 } height = { 60 } priority />
			</Col>
			<Col span = { 8 } >
				<Menu mode = "horizontal" defaultSelectedKeys = { props.frompage } items = { items } />
			</Col>
			<Col span = { 4 } >
				<SearchButton />
			</Col>
			<Col span = { 4 } >
				<AvatarLogin />
			</Col>
		</Row>
	</>
);

export default TopContent;