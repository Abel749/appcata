import React, {useState} from 'react';
import {Card, List, Radio, Form, Row, Table, Avatar, Col, Menu,Descriptions} from 'antd';
import Image from "next/image";
import styles from "../styles/newsContent.module.css";
import Link from "next/link";

const imageDivStyle ={ borderTop:'1px', borderTopStyle:'solid', };

const data = [
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证1',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/u215.png',
        date : '2023-06-01'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证2',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/u279.svg',
        date : '2023-06-02'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证3',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/u279.svg',
        date : '2023-06-03'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证4',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/u279.svg',
        date : '2023-06-04'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证5',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/u279.svg',
        date : '2023-06-05'
    },
    ];
const newsContent = (props) =>
    {
        const [position, setPosition] = useState('bottom');
        const [align, setAlign] = useState('center');
        const [newsData, setNewsData] = useState(data);

        return (
            <>
                <div style={imageDivStyle}>
                    <Image src="/u249.svg" alt="" width={1920} height={200} priority />
                </div>
                <div>
                    <h1> 新闻咨询</h1>
                    <List pagination={{ position, align,defaultPageSize:2 } }
                          grid={{ gutter: 10, column: 1, }}
                          dataSource={newsData}
                          renderItem={(item) => (
                              <List.Item >
                                  <div className={styles.list}>
                                      <Row>
                                          <Col>
                                              <div className={styles.left}>
                                                  <Image src={item.img} alt="" width={400} height={250} />
                                              </div>
                                          </Col>
                                          <Col style={{width:4}}></Col>
                                          <Link href="/newsdetail">
                                              <Col>
                                                  <div className={styles.right}>
                                                      <Row >
                                                          <Row className={styles.row1}>
                                                              <h3> {item.title}</h3>
                                                          </Row>
                                                          <Row className={styles.row2}>
                                                              <span> {item.content}</span>
                                                          </Row>
                                                          <Row className={styles.row3}>
                                                              <span>{item.date}</span>
                                                          </Row>
                                                      </Row>
                                                  </div>
                                              </Col>
                                          </Link>
                                      </Row>
                                  </div>
                              </List.Item>
                          )}
                    />
                </div>

            </>
        )
    };
export default newsContent;