import type { QuoteInterface } from "../interfaces/QuoteInterface";

interface QuoteCardProps {
    quoteCard: QuoteInterface;
}

export default function QuoteCard({ quoteCard }: QuoteCardProps) {
    return (
        <div className="quote-card">
            <p className="quote">“{quoteCard.quote}”</p>
            <h3 className="author">Auteur: {quoteCard.author}</h3>
        </div>
    );
}
