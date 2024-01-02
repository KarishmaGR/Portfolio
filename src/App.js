import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarM from "./component/Navbar/NavbarM";
import Herosection from "./component/HeroSection/Herosection";
import styled from "styled-components";
import Skill from "./component/Skills/Skill";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import ProjectDetails from "./component/ProjectDetail/ProjectDetails";
import Footer from "./component/Footer";
import Experience from "./component/Experience";

const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(300, 0, 187, 0.15) 0%,
      rgba(300, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  overflow-x: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <div className=" bg-gray-950 ">
      <Router>
        <NavbarM></NavbarM>
        <Body className=" bg-gray-900 ">
          <Herosection />
          <Wrapper>
            <Skill />
            <Education />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          <Wrapper>
            <Experience />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </div>
  );
};
export default App;
