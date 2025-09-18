export const categories = ["Alimentation", "Transport", "Loyer", "Loisirs", "Autre"] as const;

export type Category = typeof categories[number];
