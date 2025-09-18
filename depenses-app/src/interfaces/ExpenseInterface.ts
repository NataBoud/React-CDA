import type { Category } from "../constants/categories";

export interface ExpenseInterface {
    id: string;
    label: string;
    amount: number;
    category: Category;
    date: string;
}
