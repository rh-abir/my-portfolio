import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
// import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        {/* <Services></Services> */}
        <Qualification></Qualification>
        <Work></Work>
        <Testimonials></Testimonials>
        <Contact></Contact>

      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}

export default App;
