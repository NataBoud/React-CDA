import axios from "axios";
import type { QuoteInterface } from "../interfaces/QuoteInterface";
import type { QuoteDataInterface } from "../interfaces/QuoteDataInterface";

const API_URL = "https://dummyjson.com/quotes";



export const quoteService = {
    async getRandomQuote(): Promise<QuoteDataInterface> {
        try {
            const response = await axios.get<QuoteInterface>(`${API_URL}/random`);
            
            const { quote, author } = response.data;
            return { quote, author };

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                // réseau, status HTTP…
                console.error("Erreur Axios:", error.message);
                throw new Error(
                    error.response?.data?.message || "Erreur lors de la récupération de la citation."
                );
            } else if (error instanceof Error) {
                // erreur JS
                console.error("Erreur inattendue:", error.message);
                throw error;
            } else {
                // erreur non typée
                throw new Error("Une erreur inconnue est survenue.");
            }
        }
    },
};
