import { Layout } from "./components/Layout/Layout";
import globals from "./globals.css";

export const metadata = {
    title: "TOPSHOP",
    description: "Sklep e-commerce w Next.js",
};

export default function RootLayout({ children, params }) {
    console.log(params);
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
