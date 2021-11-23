import styles from "../styles/components/MiniPost.module.scss";

interface MiniPostProps {
    imgSrc: string;
    title: string;
    describe: string;
}

function MiniPost({ imgSrc, title, describe }: MiniPostProps) {
    return (
        <div className={styles.container}>
            <img src={imgSrc} alt="" />
            <div>
                <p>{title}</p>
                <p>{describe}</p>
            </div>
        </div>
    );
}

export default MiniPost;
