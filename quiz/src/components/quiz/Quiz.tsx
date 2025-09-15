import type { Question } from "../../types";
import styles from "./quiz.module.css";

type Props = {
    question: Question;
    onAnswer: (choiceId: string) => void;
};

export default function Question({ question, onAnswer }: Props) {
    return (
        <div className={styles.quiz}>
            <h2>{question.prompt}</h2>
            <ul className={styles.choices}>
                {question.choices.map((choice) => (
                    <li key={choice.id} className={styles.choiceItem}>
                        <button
                            className={styles.choiceButton}
                            onClick={() => onAnswer(choice.id)}
                        >
                            {choice.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
