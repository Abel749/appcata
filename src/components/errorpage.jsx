import React from 'react';
import Image from "next/image";
import newsContentStyles1 from "../styles/newsContent.module.css";

const ErrorPage= () => {
    return (
        <>
            <div className={newsContentStyles1.imageDivStyle2} style={{backgroundColor:'#036ED6'}}>
                <Image src="/u656.png" alt="" width={1620} height={600} priority />
            </div>
            <div className={newsContentStyles1.imageDivStyle2}>
                <Image src="/u673.png" alt="" width={1620} height={750} priority />
            </div>
        </>
    )
};
export default ErrorPage;