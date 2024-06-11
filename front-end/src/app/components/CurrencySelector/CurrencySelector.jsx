import { useContext } from "react";

import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";

export function CurrencySelector() {
  const [selectedCurency, setSelectedCurrency] = useContext(CurrencyContext);
  return (
    <select
      className={styles.currencySelector}
      value={selectedCurency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
