import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import AvatarLogin from '../components/avatarlogin';
import Image from "next/image";
import commonStyle from '../styles/common.module.css';

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


const TopContent = (props) => {
	return(
	  <>
		<div className={commonStyle.headerStyle}>
			<div className={commonStyle.headerLeft}>
				<Image src="/u110.png" alt="" width={100} height={60}  priority  />
			</div>
			<div className={commonStyle.headerCenter}>
				<Menu className={commonStyle.menuStyle}
					  mode="horizontal"
					  defaultSelectedKeys={props.frompage}
					  items = {items}
				/>
			</div>
			<div className={commonStyle.headerRight}>
				<AvatarLogin propName={props.propName} />
			</div>
		</div>
	  </>
	  );
}

export default TopContent;