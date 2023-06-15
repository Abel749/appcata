import React, {useState} from 'react';
import Image from "next/image";
import styles from "../styles/newsContent.module.css";
import { Row} from "antd";



const data =
    {   title :'恒丰银行荣获数据管理能力成熟度量化管理级认证',
        dept:'数据资源部 外部数据室',
        image : '/u340.png',
        content :'近日，中国电子信息行业联合会公布2023年新一批获得数据管理能力成熟度（DCMM）等级证书的企业名单，恒丰银行获评DCMM四级（量化管理级），标志数据管理能力已通过国家标准认证。DCMM贯标是国内最权威的数据管理成熟度认证体系，也是数据治理有力的资质证明。通过本次贯标，恒丰成为8家[  工商银行、交通银行、邮储银行、浦发银行、平安银行、华夏银行、广发银行、恒丰银行。]已通过DCMM四级以上评估的全国性商业银行之一，位列同业第一梯队，达到行业先进水平；也是山东省第1家通过DCMM四级的商业银行，体现了恒丰在商业银行数据治理领域的引领作用。本次贯标历时8个月，覆盖数据战略、数据治理、数据架构、数据应用、数据安全、数据质量、数据标准、数据生存周期等8个能力域，夯实了数据资源体系，巩固了“建设一流数字化敏捷银行”的数据能力。数据战略方面，依托“数字化”“敏捷”两大战略先导，发布数据战略规划。数据治理方面，将数据治理纳入公司治理范畴，完善数据治理顶层架构，成立数据治理委员会。数据架构方面，基于新一代全功能核心系统，升级了企业级数据架构。数据应用方面，探索与北京、上海、深圳数据交易所深度合作，建立数据要素市场化的应用模式。数据安全方面，围绕《数据安全法》《个人信息保护法》等法律法规，健全数据安全管理制度。数据质量方面，聚焦监管报送、管理会计等重点领域，开展数据质量提升专项工作。数据标准方面，推进“一数一源一标准”建设，构建完整有效的数据资源目录。数据生存周期方面，建立了贯穿备份保护、资产管理、敏捷服务的数据全生命周期管理体系。下阶段，恒丰银行将按照“建设一流数字化敏捷银行”战略规划，持续推动建立数据资源管理长效机制，充分发挥数据资源价值，打造恒丰银行高质量发展的新引擎，实现数据赋能。',
        date : '2023-06-01'
    }

;

const NewsDetail= () => {
    const [newsData] = useState(data);
    return (
        <>
            <div className={styles.imageDivStyle}>
                <Image src="/u249.svg" alt="" width={1920} height={200} priority />
            </div>

            <div className={styles.testDiv}>
                <Row>
                    <div className={styles.title}>
                        <h3>{newsData.title}</h3>
                    </div>
                </Row>
                <Row>
                    <div className={styles.dept}>
                        <p>{newsData.dept}</p>
                    </div>
                </Row>
                <Row>
                    <div className={styles.img}>
                        <Image src={newsData.image} alt="" width={800} height={540}  priority  />
                    </div>
                </Row>
                <Row>
                    <div>
                        <textarea defaultValue={newsData.content} className={styles.content}/>
                    </div>
                </Row>
                <Row>
                    <div className={styles.footer}>
                        <p>{newsData.dept}</p>
                    </div>
                </Row>
                <Row>
                    <div className={styles.footer2}>
                        <p>{newsData.date}</p>
                    </div>
                </Row>

            </div>
        </>
    )
};
export default NewsDetail;