import { Layout } from "./components/Layout/Layout";
import globals from "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    style: ["normal"],
    subsets: ["latin"],
    weight: "300",
});
export const metadata = {
    title: "TOPSHOP",
    description: "Sklep e-commerce w Next.js",
};

export default function RootLayout({ children, params }) {
    console.log(params);
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
