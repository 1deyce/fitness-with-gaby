import "./App.css";
import "./styles/hero.css";
import "./styles/header.css"
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Exercises from "./components/UI/Exercises";
import Start from "./components/UI/Start";

function App() {
  return ( 
    <>
    <Header />
    <Hero />
    <Exercises />
    <Start />
    </>
  );
}

export default App;
