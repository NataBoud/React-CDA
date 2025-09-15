
import { QUESTIONS } from "../../data/QUESTIONS";

type Props = {
    score: number;
    total: number;
    answers: string[];
};

export default function Result({ score, total, answers }: Props) {
    return (
        <div>
            <h2>
                Résultat : {score} / {total}
            </h2>

            <h3>Détails des réponses :</h3>
            <ul>
                {QUESTIONS.map((question, index) => {
                    const userAnswerId = answers[index];
                    const userAnswer = question.choices.find(c => c.id === userAnswerId);
                    const correctAnswer = question.choices.find(c => c.id === question.answerId);

                    return (
                        <li key={question.id} style={{ marginBottom: 15 }}>
                            <strong>{question.prompt}</strong>
                            <br />
                            Votre réponse :{" "}
                            <span style={{ color: userAnswerId === question.answerId ? "green" : "red" }}>
                                {userAnswer?.label || "Non répondu"}
                            </span>
                            <br />
                            Réponse correcte : {correctAnswer?.label}
                            {question.explanation && (
                                <>
                                    <br />
                                    <em>Explication : {question.explanation}</em>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
