import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

export async function MainPage() {
  const data = await fetch(`http://localhost:3000/children`).then((result) =>
    result.json()
  );

  return (
    <>
      <Hero heroImage={data.heroImageUrl} />
      <Bestsellers products={data.bestsellers} />
    </>
  );
}
