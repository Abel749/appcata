import React from 'react';
import exTaDaStyle from "../styles/extada.module.css";

const ExtDataReginData = () => (
    <div className={exTaDaStyle.baseCard}>
        <h1 className={exTaDaStyle.titleH1}>区域数据</h1>
        <h3 className={exTaDaStyle.titleH2}>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）已经在使用外部数据</h3>
        <div className={exTaDaStyle.extData05}>
            <img src='/extData/extData05.png' className={exTaDaStyle.extData05Img} alt=""/>
        </div>
    </div>
);

export default ExtDataReginData;
