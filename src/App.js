import About from "./components/About";
import Artists from "./components/Artists";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Artists />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
