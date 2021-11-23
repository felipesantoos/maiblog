import Post from "../components/Post";
import styles from "../styles/pages/HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.container}>
            <header>
                <h1>MEU BLOG</h1>
                <p>Bem-vindo ao blog do <span>felipesantoos</span></p>
            </header>
            <main>
                <div className={styles.left}>
                    <Post />
                </div>
                <div className={styles.right}></div>
            </main>
            <footer>
                <div>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
                <p>Powered by <span>felipesantoos</span></p>
            </footer>
        </div>
    );
}

export default HomePage;
