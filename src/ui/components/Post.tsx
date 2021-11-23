import { createRef, useEffect } from "react";

import { MdDoubleArrow } from "react-icons/md";

import styles from "../styles/components/Post.module.scss";

interface PostProps {
    imgSrc: string;
    imgPos: "top" | "center";
    title: string;
    describe: string;
    date: string;
    text: string;
    commentsNumber: number;
    commentsNumberForm: "square" | "circle";
}

function Post({ 
    imgSrc, 
    imgPos, 
    title, 
    describe, 
    date, 
    text, 
    commentsNumber, 
    commentsNumberForm
}: PostProps) {
    const imgRef = createRef<HTMLImageElement>();
    const commentsNumberRef = createRef<HTMLSpanElement>();

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.style.objectPosition = imgPos;
        }

        if (commentsNumberRef.current) {
            commentsNumberRef.current.classList.add(styles[commentsNumberForm]);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.container}>
            <img ref={imgRef} src={imgSrc} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{describe}<span>{date}</span></p>
                <p>{text}</p>
                <div>
                    <button>
                        <span>LER MAIS</span>
                        <MdDoubleArrow />
                    </button>
                    <p>Comments<span ref={commentsNumberRef}>{commentsNumber}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Post;
