import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import useClipboard from "../hooks/useClipboard";
import { quoteService } from "../services/quoteService";
import type { QuoteDataInterface } from "../interfaces/QuoteDataInterface";

function QuotePage() {

    const [quote, setQuote] = useState<QuoteDataInterface | null>(null);
    const { copy, copied } = useClipboard();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchQuote = async () => {
        setLoading(true);
        setError(null);
        try {
            const data: QuoteDataInterface = await quoteService.getRandomQuote();

            //  1 secondes pour voir le loading
            await new Promise(resolve => setTimeout(resolve, 1000));

            setQuote(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Une erreur inconnue est survenue.");
            }
            setQuote(null);
        } finally {
            
            setLoading(false);
        }
    };


    useEffect(() => { fetchQuote() }, []);


    return (
        <>
            <div className="app">
                <h1>Generateur de Citations</h1>

                {error && <p className="error">{error}</p>}

                {quote && <QuoteCard quoteCard={quote} loading={loading} />}

                <div className="buttons">
                    <button onClick={fetchQuote} disabled={loading}>
                        Nouvelle citation
                    </button>

                    {quote && (
                        <button onClick={() => copy(`"${quote.quote}" — ${quote.author}`)} disabled={loading}>
                            {copied ? "Copié" : "Copier"}
                        </button>
                    )}
                </div>

            </div>
        </>
    )
}

export default QuotePage
