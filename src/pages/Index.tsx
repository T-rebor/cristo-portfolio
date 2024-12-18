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
      <main className="space-y-24">
        <Hero />
        <div className="bg-white dark:bg-darkgray">
          <Newsletter />
          <Translations />
        </div>
        <Resources />
        <div className="bg-white dark:bg-darkgray">
          <Videos />
          <QuotesGallery />
        </div>
        <Timeline />
        <div className="bg-white dark:bg-darkgray">
          <Blog />
          <ReachMap />
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;