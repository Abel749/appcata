import {useState} from 'react';
import {List,  Row,Col} from 'antd';
import Image from "next/image";
import newsContentStyles from "../styles/newsContent.module.css";
import Link from "next/link";

const imageDivStyle ={
    borderTop:'1px',
    borderTopStyle:'solid',
    background:'url(/news/news-back.png) no-repeat ',
    height: '200px',
    width: '1700px',
};

const NewsH1Style = {

    height: '200px',
    width: '1700px',
};


const data = [
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证1',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/u215.png',
        date : '2023-06-01'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证2',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/news/news01.png',
        date : '2023-06-02'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证3',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/news/news01.png',
        date : '2023-06-03'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证4',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/news/news01.png',
        date : '2023-06-04'
    },
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证5',
        content :'中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。',
        img : '/news/news01.png',
        date : '2023-06-05'
    }
    ];
const position={bottom:'bottom'};
const align={center:'center'};

const newsContent = (props) => {
    {
/*        const [position, setPosition] = useState('bottom');
        const [align, setAlign] = useState('center');
        const [newsData, setNewsData] = useState(data);*/

        return (
            <>
                <div style={imageDivStyle}>
                    <h1 style={{marginTop:'120px',marginLeft:'200px', fontSize:'35px'}}> 新闻资讯</h1>
                </div>
                <div style={{marginTop:'20px'}}>

                    <List pagination={{ position, align,defaultPageSize:2 } }
                          grid={{ gutter: 10, column: 1, }}
                          dataSource={data}
                          renderItem={(item) => (
                              <List.Item >
                                  <div className={newsContentStyles.list}>
                                      <Row>
                                          <Col>
                                              <div className={newsContentStyles.left}>
                                                  <Image src={item.img} alt="" width={400} height={250} />
                                              </div>
                                          </Col>
                                          <Col style={{width:4}}></Col>
                                          <Link href="/newsdetail">
                                              <Col>
                                                  <div className={newsContentStyles.right}>
                                                      <Row >
                                                          <Row className={newsContentStyles.row1}>
                                                              <h3> {item.title}</h3>
                                                          </Row>
                                                          <Row className={newsContentStyles.row2}>
                                                              <span> {item.content}</span>
                                                          </Row>
                                                          <Row className={newsContentStyles.row3}>
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
    }
}
export default newsContent;