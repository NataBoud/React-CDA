import type { QuoteDataInterface } from "../interfaces/QuoteDataInterface";

interface QuoteCardProps {
    quoteCard: QuoteDataInterface;
    loading?: boolean;
}

export default function QuoteCard({ quoteCard, loading = false }: QuoteCardProps) {
    return (
        <div className="quote-card">
            {loading ? (
                <p className="loading">Nouvelle citation...</p>
            ) : quoteCard ? (
                <>
                    <p className="quote">“{quoteCard.quote}”</p>
                    <h3 className="author">Auteur: {quoteCard.author}</h3>
                </>
            ) : (
                <p className="muted">Aucune citation disponible.</p>
            )}
        </div>
    );
}
