import React, {useEffect, useState} from 'react';
import config from "../../next.config";
import axios from "axios";
import richTextStyle from "../styles/richtext.module.css";
import ReactMarkdown from "react-markdown";

const data = [];
const NewsDetail= (props) => {

    const [newsData, setNewsData] = useState(data);

    useEffect(() => {
        getNewsDetail().then();

    }, []);

    const getNewsDetail = async () => {
        let detailUrl = config.baseUrl.Url
        let url = window.location.href.toString();
        if(url.indexOf('newsContentId') > 0) {
            let arr = url.split('=');
            detailUrl = detailUrl+ 'api/newcontent/'+ arr[1];
        }else{
            detailUrl = detailUrl+ 'api/newcontent/'+1;
        }
        const result = await axios(
            detailUrl
        );
        const data = result.data.data.attributes;
        setNewsData(data);
    };

    return(
        <div className={richTextStyle.content}>
            <ReactMarkdown>{ newsData.RichText }</ReactMarkdown>
        </div>

    );
};
export default NewsDetail;