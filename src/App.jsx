import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <section id="hero"></section>
      <section id="about"></section>
      <section id="badge"></section>
      <section id="experience"></section>
      <section id="portfolio"></section>
      <Footer />
    </div>
  );
}
