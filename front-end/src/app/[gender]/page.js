import { MainPage } from "../views/MainPage/MainPage";

export default function GenderMainPage({ params }) {
    return <MainPage gender={params.gender} />;
}
