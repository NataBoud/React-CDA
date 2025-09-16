
import styles from "./CategoryFilter.module.css";
import type { Category } from "../../types";

type Props = {
    categories: Category[];
    selectedCategories: Category[];
    onToggleCategory: (category: Category) => void;
};

export default function CategoryFilter({ categories, selectedCategories, onToggleCategory }: Props) {
    return (
        <div className={styles.container}>
            {categories.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                    <button
                        key={category}
                        onClick={() => onToggleCategory(category)}
                        className={`${styles.button} ${isSelected ? styles.buttonSelected : ""}`}
                    >
                        {category}
                    </button>
                );
                
            })}
        </div>
    );
}
