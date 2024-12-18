import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Translations from "@/components/Translations";
import Videos from "@/components/Videos";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Resources from "@/components/Resources";
import QuotesGallery from "@/components/QuotesGallery";
import Timeline from "@/components/Timeline";
import ReachMap from "@/components/ReachMap";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Newsletter />
        <Translations />
        <Resources />
        <Videos />
        <QuotesGallery />
        <Timeline />
        <Blog />
        <ReachMap />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;