import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import summersale from "./../../../../public/summersale.jpg";
import sweater from "./../../../../public/products/sweater.jpg";

export function MainPage() {
    const products = [
        {
            id: 1,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "Biały sweter 1",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            photos: [sweater.src, sweater.src, sweater.src],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
        {
            id: 2,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "Biały sweter 2",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            photos: [sweater.src, sweater.src, sweater.src],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
        {
            id: 3,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "Biały sweter 3",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [sweater.src, sweater.src, sweater.src],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
        {
            id: 4,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "Biały sweter 4",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [sweater.src, sweater.src, sweater.src],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
    ];

    return (
        <>
            <Hero heroImage={summersale.src} />
            <Bestsellers products={products} />
        </>
    );
}
