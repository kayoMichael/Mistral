import Container from "./components/container/Container";
import MistralCard from "./components/card/MistralCard";
import CarouselBridge from "./components/infiniteCorousel/CourselBridge";
import MistralFeatures from "./components/card/MistralFeature";
import MistralAppearCard from "./components/card/MistralAppearCard";
import CareerCard from "./components/card/CareerCard";
import MistralFooter from "./components/footer/MistralFooter";
import Hero from "./components/hero/Hero";
import MistralArticle from "./components/card/MistralArticle";
import MistralCareer from "./components/card/MistralCareer";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Container className="mt-36">
        <div className="w-full flex flex-col space-y-24">
          <MistralCard />
          <CarouselBridge />
          <MistralFeatures />
        </div>
      </Container>
      <div className="mt-20">
        <CarouselBridge type={true}></CarouselBridge>
      </div>
      <Container className="mt-24 flex-col gap-14">
        <MistralAppearCard />
        <MistralArticle />
        <CareerCard />
        <MistralCareer />
      </Container>
      <div className="mt-24">
        <MistralFooter />
      </div>
    </div>
  );
}
