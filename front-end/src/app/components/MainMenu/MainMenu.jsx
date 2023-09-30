import styles from "./MainMenu.module.css";
import { GENDERS } from "@/app/constants/productCategories";

export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            {GENDERS.map(({ path, categoryName }) => (
                <li key={path}>
                    <a href={path}>{categoryName}</a>
                </li>
            ))}
        </ul>
    );
}
