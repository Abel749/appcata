import Link from 'next/link';
import {Row,Col} from 'antd';
import AvatarLogin from '../components/avatarlogin';
import Image from "next/image";
import commonStyle from '../styles/common.module.css';
import {useEffect} from "react";

const TopContent = (props) => {


	useEffect(() => {
		const zzz = props.frompage;
		console.log(props.frompage)
		document.getElementById(zzz).style.backgroundColor="#0258AB";
	}, []);// eslint-disable-line


	return(
	  <>
		<div className={commonStyle.headerStyle}>
			<div className={commonStyle.headerLeft}>
				<Image src="/u110.png" alt="" width={100} height={60}  priority  />
			</div>
			<div className={commonStyle.headerCenter}>
				<Row>
					<Col>
						<Link href="/">
							<h3 id="home" className={commonStyle.menu} >首页</h3>
						</Link>
					</Col>
					<Col>
						<Link href="/datacenter">
							<h3 id="datacenter" className={commonStyle.menu} >资产中心</h3>
						</Link>
					</Col>
					<Col>
						<Link href="/newslist">
							<h3 id="newsList" className={commonStyle.menu} >新闻资讯</h3>
						</Link>
					</Col>
					<Col>
						<Link href="/searchpage">
							<h3 id="searchPage" className={commonStyle.menu}>恒必应</h3>
						</Link>
					</Col>
				</Row>

			</div>
			<div className={commonStyle.headerRight}>
				<AvatarLogin propName={props.propName} />
			</div>
		</div>
	  </>
	  );
}

export default TopContent;