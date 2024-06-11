"use client";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { IconMenu } from "../IconMenu/IconMenu";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";

export function Layout({ children }) {
  return (
    <>
      <CurrencyContext.Provider>
        <MainContent>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopBar>
          <CategoriesMenu />
          {children}
        </MainContent>
      </CurrencyContext.Provider>
      <Footer />
    </>
  );
}
