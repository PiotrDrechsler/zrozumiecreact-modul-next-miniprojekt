"use client";
import { usePathname } from "next/navigation";

import styles from "./MainMenu.module.css";
import { GENDERS } from "@/app/constants/productCategories";

export function MainMenu() {
  const pathname = usePathname();
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map(({ path, categoryName }) => (
        <li key={path}>
          <a className={pathname === path ? "active" : ""} href={path}>
            {categoryName}
          </a>
        </li>
      ))}
    </ul>
  );
}
