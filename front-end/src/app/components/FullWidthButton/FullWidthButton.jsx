import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, type }) {
    return (
        <button
            className={`${styles.button} ${
                type === "green" ? styles.green : styles.black
            }`}
        >
            {children}
        </button>
    );
}
