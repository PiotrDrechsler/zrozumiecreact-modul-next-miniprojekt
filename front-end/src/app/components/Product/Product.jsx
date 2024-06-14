"use client";
import { useContext } from "react";
import Image from "next/image";

import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import styles from "./Product.module.css";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";

export function Product({ product }) {
  const [currency] = useContext(CurrencyContext);
  return (
    <>
      <div className={styles.productCard}>
        <Image src={product.photos[0]} width="250" height="400" />

        <button>
          <div className={styles.favourite}></div>
        </button>

        <div>
          <p className={styles.name}>{product.productName}</p>
          <p className={styles.productPrice}>
            {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}{" "}
            {currency === CURRENCIES.PLN
              ? CURRENCY_SIGN.PLN
              : CURRENCY_SIGN.USD}
          </p>
        </div>
      </div>
    </>
  );
}
