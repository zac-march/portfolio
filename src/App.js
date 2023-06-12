import "./App.css";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Portfolio from "./sections/Portfolio/Portfolio";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
      </main>
    </div>
  );
}

export default App;
