import React, {useEffect} from 'react';
import {Col, Row} from "antd";
import dataStandStyle from "../../styles/Datastand.module.css";

const DataUpload = () => {
    useEffect(() => {

    }, []);// eslint-disable-line

    const Submit = () => {
        const form = document.querySelector('form');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await fetch('/api/upload', {
                method: 'post',
                body: new FormData(e.target)
            });
        });
    }
    return (
        <div className={dataStandStyle.baseCard}>
            <h1 className={dataStandStyle.titleH1}>新增/变更申请(待建设)</h1>
            <Row className={dataStandStyle.row3}>
                <Col className={dataStandStyle.col3Div1} >
                    <div className={dataStandStyle.col3Div2}>新增/变更申请模板</div>
                    <div className={dataStandStyle.col3Div2}>
                        <form>
                            <input type="file"  name="files" />
                            <input type="submit" value="Submit" onClick={Submit} />
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default DataUpload;
