import React from 'react';
import Link from "next/link";
import indexStyle from '../styles/index.module.css';

const linkToBlood = async () => {
    window.open("http://10.84.188.105:3000/");
}

const Content2 = () => (

    <div className={indexStyle.content2}>
        <div>
            <h1>产品中心</h1>
            <h2>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）已经在使用外部数据</h2>
            <div className={indexStyle.container1}>
                <div className={indexStyle.outBaseDivHidden1}>
                    <div className={indexStyle.outDivHidden}>
                        <p className={indexStyle.outH3Hidden}>外部数据</p>
                    </div>
                </div>
                <div className={indexStyle.outBaseDivShow1}>
                    <div className={indexStyle.outDivShow}>
                        <Link href="/extdata" >
                            <div className={indexStyle.link}>
                                <p className={indexStyle.outH3}>外部数据</p>
                                <p className={indexStyle.outContent} >全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                <button className={indexStyle.outButton}>了解更多</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={indexStyle.container2}>
                <div className={indexStyle.outBaseDivHidden2}>
                    <div className={indexStyle.outDivHidden}>
                        <p className={indexStyle.outH3Hidden}>数据应用</p>
                    </div>
                </div>
                <div className={indexStyle.outBaseDivShow2}>
                    <div className={indexStyle.outDivShow}>
                        <Link href="/errorpage">
                            <div className={indexStyle.link}>
                                <p className={indexStyle.outH3}>数据应用</p>
                                <p className={indexStyle.outContent} >全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                <button className={indexStyle.outButton}>了解更多</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={indexStyle.container3}>
                <div className={indexStyle.outBaseDivHidden3}>
                    <div className={indexStyle.outDivHidden}>
                        <p className={indexStyle.outH3Hidden}>数据治理</p>
                    </div>
                </div>
                <div className={indexStyle.outBaseDivShow3}>
                    <div className={indexStyle.outDivShow}>
                        <Link href="#" onClick={linkToBlood}>
                            <div className={indexStyle.link}>
                                <p className={indexStyle.outH3}>数据治理</p>
                                <p className={indexStyle.outContent} >全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                <button className={indexStyle.outButton}>了解更多</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={indexStyle.container4}>
                <div className={indexStyle.outBaseDivHidden4}>
                    <div className={indexStyle.outDivHidden}>
                        <p className={indexStyle.outH3Hidden}>数据安全</p>
                    </div>
                </div>
                <div className={indexStyle.outBaseDivShow4}>
                    <div className={indexStyle.outDivShow}>
                        <Link href="/errorpage">
                            <div className={indexStyle.link}>
                                <p className={indexStyle.outH3}>数据安全</p>
                                <p className={indexStyle.outContent} >全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                                <button className={indexStyle.outButton}>了解更多</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Content2;
