import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Qualification from "../components/Qualification/Qualification";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
const Main = () => {
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
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
};

export default Main;
