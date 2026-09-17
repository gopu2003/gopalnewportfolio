import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import BadgeCallout from "./components/BadgeCallout";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutCard />
      </section>
      <section id="badge">
        <BadgeCallout />
      </section>
      <section id="experience"></section>
      <section id="portfolio"></section>
      <Footer />
    </div>
  );
}
