import styles from "./SkeletonCard.module.css";

export default function SkeletonCard() {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonContent}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonAuthor}></div>
                <div className={styles.skeletonCategories}></div>
            </div>
        </div>
    );
}
