import Link from 'next/link';
import {Row,Col} from 'antd';
import AvatarLogin from './avatarlogin';
import Image from "next/image";
import commonStyle from '../../styles/common.module.css';
import {useEffect} from "react";

const TopContent = (props) => {


	useEffect(() => {
		console.log(props.frompage);
		document.getElementById(props.frompage).style.backgroundColor="#0258AB";
	}, []);// eslint-disable-line

	const linkToBlood = async () => {
		window.open("http://10.84.188.105:3000/");
	}

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
						<div className={commonStyle.nav1}>
							<h3 id="product" className={commonStyle.uList}>产品中心</h3>
							<div className={commonStyle.nav2}>
								<Link href="/extdata">外部数据</Link>
								<Link href="/hfzw" >恒丰智网</Link>
								<Link href="/#" onClick={linkToBlood}>数据治理</Link>
								<Link href="/errorpage" >数据安全</Link>
								<Link href="/datastand" >数据标准</Link>
							</div>
						</div>
					</Col>
					<Col>
						<Link href="/datacenter">
							<h3 id="datacenter" className={commonStyle.menu} >挂牌中心</h3>
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