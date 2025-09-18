export type Category = "Alimentation" | "Transport" | "Loyer" | "Loisirs" | "Autre";

export interface ExpenseInterface {
    id: string;
    label: string;
    amount: number;
    category: Category;
    date: string;
}
