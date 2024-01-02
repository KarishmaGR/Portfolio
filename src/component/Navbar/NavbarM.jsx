// import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
    height: auto;
    padding: 10px 0;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100vw;
  @media (max-width: 960px) {
    flex-direction: column;
    height: fit-content;
    gap: 1rem;
  }
`;
const NavbarM = () => {
  return (
    <Nav className="bg-gray-900">
      <NavbarContainer className="px-28">
        <div>
          <span className="self-center  text-white whitespace-nowrap text-2xl font-semibold dark:text-white">
            PortFolio
          </span>
        </div>

        <div className="min-w-[30rem] ">
          <ul className="flex justify-between sm:flex-col sm:gap-4 items-center">
            <li>
              <a
                href="#about"
                className="text-white text-lg  active:text-purple-800 hover:text-purple-800 transition-all duration-500 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="text-white text-lg active:text-purple-800 hover:text-purple-800 transition-all duration-500 ease-in-out"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-white text-lg active:text-purple-800 hover:text-purple-800 transition-all duration-500 ease-in-out"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg active:text-purple-800 hover:text-purple-800 transition-all duration-500 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-grey-900 border py-2 text-purple-800 hover:text-white font-semibold active:text-white w-40 px-6 transition-all duration-700 ease-in-out rounded-3xl border-purple-700 hover:bg-purple-800 active:bg-purple-800">
            <a href="https://github.com/KarishmaGR" className=" ">
              Github Profile
            </a>
          </button>
        </div>
      </NavbarContainer>
    </Nav>
  );
};
export default NavbarM;
