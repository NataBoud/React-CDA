import styles from "./progressBar.module.css";

type Props = {
    current: number;
    total: number;
};

export default function ProgressBar({ current, total }: Props) {
    const percentage = (current / total) * 100;

    return (
        <div className={styles.progressContainer}>
            <div
                className={styles.progressFill}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
