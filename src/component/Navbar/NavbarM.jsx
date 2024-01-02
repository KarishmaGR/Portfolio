// import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
const Nav = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margine-bottom: 2rem;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
    height: auto;
    padding: 10px 0;
  }
`;

const NavbarM = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <Nav>
      <nav className="bg-gray-900 min-h-max fixed w-full z-20 top-0 start-0 border-b border-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PortFolio
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="https://github.com/KarishmaGR/"
              className="bg-grey-900 border py-2 text-purple-800 hover:text-white font-semibold active:text-white w-40 px-6 transition-all duration-700 ease-in-out rounded-3xl border-purple-700 hover:bg-purple-800 active:bg-purple-800"
            >
              Github Profile
            </a>
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900  "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between min-h-max  w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "flex" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="about"
                  className="block py-2 px-3 text-gray-100 rounded hover:text-purple-800"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-3 text-gray-100 rounded hover:text-purple-800   "
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-2 px-3 text-gray-100 rounded hover:text-purple-800"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-gray-100 rounded hover:text-purple-800"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block py-2 px-3 text-gray-100 rounded hover:text-purple-800"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray-100 rounded hover:text-purple-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Nav>
  );
};
export default NavbarM;
