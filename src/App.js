import "./App.css";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Portfolio from "./sections/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
