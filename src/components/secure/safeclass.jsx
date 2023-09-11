import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {Col, List, Row} from 'antd';
import safeStyle from "../../styles/safe.module.css";
import searchDataStyle from "../../styles/searchdata.module.css";
const data = [];

const SafeClass = (props) => {

    const [menu, setMenu] = useState(data);
    const [dataItem, setDataItem] = useState(data);

    useEffect(() => {
        const menus = [
            {
                id:'container1',
                name:'客户',
                bgUrl:'/safe/u1795.png',
                linkUrl:'/extdata',
            },
            {
                id:'container2',
                name:'业务',
                bgUrl:'/safe/u1797.png',
                linkUrl:'/hfzw',
            },
            {
                id:'container3',
                name:'经营管理',
                bgUrl:'/safe/u1799.png',
                linkUrl:'#',
            },
            {
                id:'container4',
                name:'监管',
                bgUrl:'/safe/u1801.png',
                linkUrl:'/safe',
            },
        ];
        setMenu(menus);

        const dataItem = [
            {
                id:'0',
                name:'措施',
                level:'级别调整',
            },
            {
                id:'1',
                name:'汇聚融合',
                level:'3级升至4级',
            },
            {
                id:'2',
                name:'生产数据脱敏后用于我行内部业务经营或管理工作',
                level:'3级降至2级',
            },
            {
                id:'3',
                name:'汇聚融合，特定机构特定时间或事件后信息具有高安全等级',
                level:'2级升至4级',
            },
            {
                id:'4',
                name:'脱敏，从数据中去除能够直接定位到个人金融信息主体的内容，删除涉及商业秘密的内容等，特定时间或事件后信息失去原有敏感性',
                level:'4级降至2级',
            },
        ];
        setDataItem(dataItem)


    }, []);// eslint-disable-line
    return (
        <div className={safeStyle.content2}>
            <h1>数据分类分级</h1>
            <h2>典型数据项定级规则参考</h2>
            <List
                  grid={{ column: 4}}
                  dataSource={menu}
                  renderItem={(item) => (
                      <List.Item>
                          <div className={safeStyle.container}>
                              <Link href={item.linkUrl} >
                                  <img src={item.bgUrl}  alt="image"/>
                                  <div className={safeStyle.outDivShow}>
                                    <h3>{item.name}</h3>
                                  </div>
                              </Link>
                          </div>
                      </List.Item>
                  )}
            />
            <div className={safeStyle.sDiv}>
                <h4>&nbsp;</h4>
                <h3>数据安全升降级主要情形</h3>
                <div className={safeStyle.list}>
                    <div className={safeStyle.left}>
                        <h4>&nbsp;</h4>
                        <p>导致数据发生升降级的主要情形有数据脱敏、删除关键字段、汇聚融合等。脱敏后产生的数据，安全级别通常低于脱敏前的数据。汇聚融合是指对数据进行集中、清洗、转换、重组、关联分析、多方计算等处理的过程，相对于汇聚融合前数据的安全级别，经过不同的数据汇聚融合处理手段所产生的数据，级别可能上升，也可能下降。级别变更应参照以下数据脱敏或汇聚融合导致的示例升降。</p>
                    </div>
                    <div className={safeStyle.right}>
                        <h4>数据级别升降示例</h4>
                        <List
                              grid={{ gutter: 10, column: 1, }}
                              dataSource={dataItem}
                              className={safeStyle.list}
                              renderItem={(item) => (
                                  <Row className={safeStyle.row}>
                                      <Col span={16} className={safeStyle.col}>{item.name}</Col>
                                      <Col span={8} className={safeStyle.col}>{item.level}</Col>
                                  </Row>
                              )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SafeClass;
