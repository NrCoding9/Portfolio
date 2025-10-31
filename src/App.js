import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import DownloadResume from "./components/DownloadResume";
import StickyHeader from "./components/StickyHeader";
import ScrollIndicator from "./components/ScrollIndicator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen relative">
      <StickyHeader />
      <div id="introduction" className="relative min-h-screen flex items-center justify-center">
        <Introduction />
        <ScrollIndicator />
      </div>
      <main className="flex flex-col items-center justify-center">
        <section className="max-w-5xl">
        <About />
        <ScrollIndicator />
        </section>
        <section className="max-w-5xl">
          <Experience />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <ContactForm />
        </section>
        <section>
          <DownloadResume />
        </section>
        <section>
          <Footer />
        </section>
        

      </main>\
      <Analytics />
    </div>
  );
}

export default App;
