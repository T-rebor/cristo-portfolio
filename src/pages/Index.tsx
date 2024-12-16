import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Translations from "@/components/Translations";
import Videos from "@/components/Videos";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Translations />
        <Videos />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;