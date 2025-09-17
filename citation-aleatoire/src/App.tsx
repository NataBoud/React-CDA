import { useEffect, useState } from "react";
import type { QuoteInterface } from "./interfaces/QuoteInterface";
import QuoteCard from "./components/QuoteCard";
import useClipboard from "./hooks/useClipboard";
import { quoteService } from "./services/quoteService";

function App() {

  const [quote, setQuote] = useState<QuoteInterface | null>(null);
  const { copy, copied } = useClipboard();

  const fetchQuote = async () => {
    const data = await quoteService.getRandomQuote();
    setQuote(data);
  };

  useEffect(() => {fetchQuote()}, []);

  if (!quote) return <p className="loading">Chargement...</p>;

  return (
    <>
    
      <div className="app">
        <h1>Dummy Json Citations</h1>
        <QuoteCard quoteCard={quote} />
        <div className="buttons">
          <button onClick={fetchQuote}>Nouvelle citation</button>
          <button onClick={() => copy(`"${quote.quote}" — ${quote.author}`)}>
            {copied ? "Copié" : "Copier"}
          </button> 
        </div>
      </div>
    </>
  )
}

export default App
