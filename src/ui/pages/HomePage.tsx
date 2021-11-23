import Post from "../components/Post";
import MiniPost from "../components/MiniPost";

import Forest from "../../assets/images/forest.jpg";
import Girl from "../../assets/images/girl.jpg";
import Male from "../../assets/images/male.jpg";
import Workshop from "../../assets/images/workshop.jpg";
import Gondol from "../../assets/images/gondol.jpg";
import Skies from "../../assets/images/skies.jpg";
import Rock from "../../assets/images/rock.jpg";

import { MdDoubleArrow } from "react-icons/md";

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
                    <Post
                        imgSrc={Forest}
                        imgPos="top"
                        title="TÍTULO DA NOTÍCIA"
                        describe="Descrição da notícia, "
                        date="Novembro 21, 2021"
                        text="Mauris neque quam, fermentum ut nisl vitae, convallis 
                        maximus nisl. Sed mattis nunc id lorem euismod placerat. 
                        Vivamus porttitor magna enim, ac accumsan tortor cursus at. 
                        Phasellus sed ultricies mi non congue ullam corper. Praesent 
                        tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, 
                        porta lectus vitae, ultricies congue gravida diam non fringilla."
                        commentsNumber={0}
                        commentsNumberForm="square"
                    />
                    <Post
                        imgSrc={Girl}
                        imgPos="center"
                        title="TÍTULO DA NOTÍCIA"
                        describe="Descrição da notícia, "
                        date="Novembro 21, 2021"
                        text="Mauris neque quam, fermentum ut nisl vitae, convallis 
                        maximus nisl. Sed mattis nunc id lorem euismod placerat. 
                        Vivamus porttitor magna enim, ac accumsan tortor cursus at. 
                        Phasellus sed ultricies mi non congue ullam corper. Praesent 
                        tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, 
                        porta lectus vitae, ultricies congue gravida diam non fringilla."
                        commentsNumber={2}
                        commentsNumberForm="circle"
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.profile}>
                        <img src={Male} alt="" />
                        <div>
                            <h3>Felipe Santos</h3>
                            <p>
                                Just me, myself and I, exploring the universe of 
                                uknownment. I have a heart of love and a interest 
                                of lorem ipsum and mauris neque quam blog. I want 
                                to share my world with you.
                            </p>
                        </div>
                    </div>
                    <div className={styles.popularPosts}>
                        <h3>Posts populares</h3>
                        <div>
                            <MiniPost
                                imgSrc={Workshop}
                                title="Lorem"
                                describe="Sed mattis nunc"
                            />
                            <MiniPost
                                imgSrc={Gondol}
                                title="Ipsum"
                                describe="Praes tinci sed"
                            />
                            <MiniPost
                                imgSrc={Skies}
                                title="Dorum"
                                describe="Ultricies congue"
                            />
                            <MiniPost
                                imgSrc={Rock}
                                title="Mingsum"
                                describe="Lorem ipsum dipsum"
                            />
                        </div>
                    </div>
                    <div className={styles.tags}>
                        <p>Tags</p>
                        <div>
                            <span>Travel</span>
                            <span>New York</span>
                            <span>London</span>
                            <span>IKEA</span>
                            <span>NORWAY</span>
                            <span>DIY</span>
                            <span>Ideas</span>
                            <span>Baby</span>
                            <span>Family</span>
                            <span>News</span>
                            <span>Clothing</span>
                            <span>Shopping</span>
                            <span>Sports</span>
                            <span>Games</span>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <button>Previous</button>
                    <button>
                        <span>Next</span>
                        <MdDoubleArrow />
                    </button>
                </div>
                <p>Powered by <span>felipesantoos</span></p>
            </footer>
        </div>
    );
}

export default HomePage;
