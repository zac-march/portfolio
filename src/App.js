import "./App.css";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Portfolio from "./sections/Portfolio/Portfolio";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
