import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";

export function CurrencySelector() {
    const [selectedCurrency, setSelectedCurrency] = useContext(CurrencyContext);
    return (
        <select
            className={styles.currencySelector}
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
        >
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
}
