import React, {useEffect, useState} from 'react';
import config from "../../../next.config";
import axios from "axios";
import newsStyle from "../../styles/news.module.css";
import ReactMarkdown from "react-markdown";

const data = [];
const ResearchDetail= (props) => {

    const [reports, setReports] = useState(data);

    useEffect(() => {
        getNewsDetail();

    }, []);

    const getNewsDetail =  () => {
        let detailUrl = config.baseUrl.Url
        let url = window.location.href.toString();
        if(url.indexOf('researchDetailId') > 0) {
            let arr = url.split('=');
            detailUrl = detailUrl+ 'api/reports?filters[id][$eq]='+ arr[1];
        }
        console.log(detailUrl);
        const result =  axios(
            detailUrl
        ).then((res)=>{
            if( null != res.data){
                const data = res.data.data.map((item) => {
                    item.attributes.id = item.id;
                    return item.attributes;
                })
                setReports(data[0]);
            }
        });

    };

    return(
        <div className={newsStyle.content}>
            <ReactMarkdown>{ reports.RichText }</ReactMarkdown>
        </div>

    );
};
export default ResearchDetail;