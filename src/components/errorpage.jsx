import React from 'react';
import Image from "next/image";
import styles from "../styles/newsContent.module.css";

const ErrorPage= () => {
    return (
        <>
            <div className={styles.imageDivStyle2}>
                <Image src="/u656.png" alt="" width={1620} height={750} priority />
            </div>
            <div className={styles.imageDivStyle2}>
                <Image src="/u673.png" alt="" width={1620} height={750} priority />
            </div>
        </>
    )
};
export default ErrorPage;