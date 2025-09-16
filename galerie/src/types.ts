export type Category =
    | "toutes"
    | "nature"
    | "paysage"
    | "architecture"
    | "ville"
    | "animaux"
    | "sombre";

export type Image = {
    id: string;
    url: string;
    title: string;
    categories: Category[];
    author: string;
};