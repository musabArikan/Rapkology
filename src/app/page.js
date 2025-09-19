import Header from "../components/home/Header";
import Container from "../components/Container";
import TwitchHero from "@/components/home/TwitchHero";
import TrendsHero from "@/components/TrendsHero";
import MonthlyFavorites from "@/components/home/MonthlyFavorites";
import Discover from "@/components/Discover";

export default function Home() {
  return (
    <>
      <Header />
      <TwitchHero />
      <Container>
        <TrendsHero />
      </Container>
      <MonthlyFavorites />
      <Container>
        <Discover />
      </Container>
    </>
  );
}
