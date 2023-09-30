import styles from "./CategoriesMenu.module.css";
import { CATEGORIES } from "@/app/constants/productCategories";

export function CategoriesMenu() {
    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map(({ path, categoryName }) => (
                    <li key={path}>
                        <a to={path}>{categoryName}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
