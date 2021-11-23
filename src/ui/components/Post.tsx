import Woods from "../../assets/images/woods.jpg";

import styles from "../styles/components/Post.module.scss";

function Post() {
    return (
        <div className={styles.container}>
            <img src={Woods} alt="" />
            <div>
                <h2>TÍTULO DA NOTÍCIA</h2>
                <p>Descrição da notícia, <span>Novembro 21, 2021</span></p>
                <p>
                    Mauris neque quam, fermentum ut nisl vitae, convallis maximus
                    nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                    magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
                    mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum.
                    Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                    gravida diam non fringilla.
                </p>
                <div>
                    <button>LER MAIS</button>
                    <p>Comments<span>0</span></p>
                </div>
            </div>
        </div>
    );
}

export default Post;
