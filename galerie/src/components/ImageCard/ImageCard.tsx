import styles from "./ImageCard.module.css";
import type { Image } from "../../types";

type Props = {
    image: Image;
};

export default function ImageCard({ image }: Props) {
    return (

        <div className={styles.card}>
            <img src={image.url} alt={image.title} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.title}>{image.title}</div>
                <div className={styles.author}>Auteur : {image.author}</div>
                <div className={styles.categories}>
                    {image.categories.map((cat) => (
                        <span key={cat} className={styles.category}>
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
