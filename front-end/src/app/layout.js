import { Layout } from "./components/Layout/Layout";
import globals from "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "TOPSHOP",
  description: "Sklep e-commerce w Next.js",
};

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
