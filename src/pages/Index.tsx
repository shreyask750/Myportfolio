import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import ContactBot from "@/components/ContactBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Summary />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <ContactBot />
      <Footer />
    </div>
  );
};

export default Index;
