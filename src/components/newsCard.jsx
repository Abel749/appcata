
import React, {useState} from 'react';
import Image from "next/image";
import styles from '../styles/newsCard.module.css';
import {List, Row,Col} from "antd";
import Link from "next/link";

const data = [
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证1',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        date : '2023-06-01'
    },
    {   title :'国家发改委权威解读：逐条读懂数据二十条',
        content :'中共中央国务院近日印发关于构建数据基础制度，更好发挥数据要素作用的意见，意见指出，数据基础制度建设事关国家发展和安全大局。',
        date : '2023-06-02'
    },
    {   title :'构建数据基础制度 更好发挥数据要素作用—国家发展改革委负责同志答记者问',
        content :'数据基础制度建设事关国家发展和安全大局。《关于构建数据基础制度更好发挥数据要素作用的意见》（“数据二十条”）19日对外发布。意见出台的总体考虑是什么？怎样理解其内涵？记者就此采访了国家发展改革委负责同志。',
        date : '2023-06-03'
    },
];

const Mainlogo = (props) =>
{
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    const [newsData, setNewsData] = useState(data);

    return (

    <div className={styles.dev0}>
        <h1 className={styles.hh1}> 新闻咨询</h1>
        <div>
            <div className={styles.left}>
                <Image src="/u215.png" alt="" width={400} height={250} /></div>
          <div className={styles.right}>
              <List
                    dataSource={newsData}
                    renderItem={(item) => (
                        <List.Item className={styles.list} >
                            <Link href="/newsdetail">
                                <Row >
                                    <Row className={styles.row1} >
                                        <h3> {item.title}</h3>
                                    </Row>
                                    <Row className={styles.row2} >
                                        <span> {item.content}</span>
                                    </Row>
                                    <Row className={styles.row3} >
                                        <span>{item.date}</span>
                                    </Row>
                                </Row>
                            </Link>
                        </List.Item>
                    )}
              />
              <Link href="/newslist">
                  <div className={styles.button} >查看更多</div>
              </Link>
            </div>
        </div>
    </div>
    )
};

export default Mainlogo;