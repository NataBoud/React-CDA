
type Props = {
    score: number;
    total: number;
    answers: string[];
};

export default function Result({ score, total }: Props) {
    return (
        <div>
            <h2>
                Résultat : {score} / {total}
            </h2>
           
        </div>
    );
}
