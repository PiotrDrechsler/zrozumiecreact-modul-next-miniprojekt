import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

const PARAMS_MAPPING = {
    mezczyzna: "men",
    kobieta: "women",
    dziecko: "children",
};

export async function MainPage({ gender }) {
    const data = await fetch(
        `http://localhost:3000/${PARAMS_MAPPING[gender]}`
    ).then((result) => result.json());

    return (
        <>
            <Hero heroImage={data.heroImageUrl} />
            <Bestsellers products={data.bestsellers} />
        </>
    );
}
