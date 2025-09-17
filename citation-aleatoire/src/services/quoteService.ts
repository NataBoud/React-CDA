import axios from "axios";
import type { QuoteInterface } from "../interfaces/QuoteInterface";

const API_URL = "https://dummyjson.com/quotes";

export const quoteService = {
    async getRandomQuote(): Promise<QuoteInterface> {
        const response = await axios.get<QuoteInterface>(`${API_URL}/random`);
        return response.data;
    }
};