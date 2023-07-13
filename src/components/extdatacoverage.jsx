import React from 'react';
import exTaDaStyle from "../styles/extada.module.css";

const ExtDataCoverage = () => (
    <div >
        <div className={exTaDaStyle.content2}>
            <h1 className={exTaDaStyle.titleH1}>数据覆盖</h1>
            <h3 className={exTaDaStyle.titleH2}>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）</h3>
            <h3 className={exTaDaStyle.titleH3}>已经在使用外部数据</h3>
            <div className={exTaDaStyle.externalData03}>
                <img src='/extData/externalData_03.jpg' className={exTaDaStyle.externalData03Img} alt=""/>
            </div>
        </div>
    </div>
);

export default ExtDataCoverage;
