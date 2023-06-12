import "./App.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
