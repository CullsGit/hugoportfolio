import "./App.css";
import LandingPage from "./containers/landingPage/LandingPage";
import Navbar from "./containers/navbar/Navbar";
import AboutMe from "./containers/aboutMe/AboutMe";
import Projects from "./containers/projects/Projects";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
