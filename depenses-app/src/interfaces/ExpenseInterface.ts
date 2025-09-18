export type Category = "alimentation" | "transport" | "loyer" | "loisirs" | "autre";

export interface ExpenseInterface {
    id: string;
    label: string;
    amount: number;
    category: Category;
    date: string;
}
