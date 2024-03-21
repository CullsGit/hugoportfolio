import "./App.css";
import LandingPage from "./containers/landingPage/LandingPage";
import Navbar from "./containers/navbar/Navbar";
import AboutMe from "./containers/aboutMe/AboutMe";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;
