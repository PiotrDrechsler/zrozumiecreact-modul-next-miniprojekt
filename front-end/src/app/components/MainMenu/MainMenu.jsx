"use client";
import styles from "./MainMenu.module.css";
import { GENDERS } from "@/app/constants/productCategories";
import { usePathname } from "next/navigation";

export function MainMenu() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <ul className={styles.mainMenu}>
            {GENDERS.map(({ path, categoryName }) => (
                <li key={path}>
                    <a
                        className={pathname === path ? "active" : ""}
                        href={path}
                    >
                        {categoryName}
                    </a>
                </li>
            ))}
        </ul>
    );
}
